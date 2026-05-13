#!/usr/bin/env python3
"""
Gemini Image Generation Script for BreakdownInsurance.co.nz
============================================================
Generates 8 hero images using Google Gemini Imagen API.

Usage:
    python3 scripts/generate-images.py

Requirements:
    pip install requests pillow

Set your Gemini API key:
    export GEMINI_API_KEY="your-key-here"
    # OR edit GEMINI_API_KEY below
"""

import os
import sys
import base64
import json
import time

try:
    import requests
    from PIL import Image
    import io
except ImportError:
    print("Missing dependencies. Run: pip install requests pillow")
    sys.exit(1)

# ============================================================
# CONFIGURATION
# ============================================================
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY", "")
OUTPUT_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public", "images")
TARGET_WIDTH = 1920
TARGET_HEIGHT = 1080
JPEG_QUALITY = 85

# ============================================================
# IMAGE PROMPTS — tailored for MBI / vehicle insurance themes
# ============================================================
IMAGE_PROMPTS = [
    {
        "filename": "hero-1.jpg",
        "prompt": (
            "Cinematic wide-angle photograph of a modern silver Toyota Corolla driving on an open New Zealand highway at golden hour. "
            "Mount Cook visible in the distance, dramatic alpine sky with warm orange and amber clouds. The car is clean, modern, and moving "
            "confidently. Editorial automotive photography style, premium feel, shallow depth of field on the foreground road. "
            "No text, no watermarks, no people visible inside."
        ),
    },
    {
        "filename": "hero-2.jpg",
        "prompt": (
            "Professional photograph of a skilled New Zealand mechanic in a clean modern workshop inspecting a vehicle engine bay. "
            "The workshop is well-lit with professional equipment. The mechanic wears clean coveralls and uses diagnostic equipment. "
            "The mood is competent, trustworthy, and reassuring. Editorial lifestyle photography, warm natural lighting. "
            "No text, no watermarks."
        ),
    },
    {
        "filename": "hero-3.jpg",
        "prompt": (
            "Aerial cinematic photograph of a white SUV parked at a New Zealand roadside rest area with stunning turquoise lake and "
            "snow-capped mountains in background. Fiordland or Mackenzie Basin landscape. Beautiful New Zealand wilderness. "
            "The vehicle is prominent, clean, and modern. Professional travel photography style, golden hour lighting. "
            "No text, no watermarks."
        ),
    },
    {
        "filename": "hero-4.jpg",
        "prompt": (
            "Close-up cinematic photograph of a modern electric vehicle charging at a sleek EV charger in New Zealand. "
            "Clean urban background with soft bokeh. The EV is white or silver, premium brand, charging indicator lights visible. "
            "Premium editorial photography style, blue and white colour palette suggesting technology and reliability. "
            "No text, no watermarks."
        ),
    },
    {
        "filename": "hero-5.jpg",
        "prompt": (
            "Professional photograph of a happy New Zealand family loading luggage into their modern SUV on a sunny day. "
            "Beautiful New Zealand suburban street with green trees. The family is relaxed and confident. "
            "Editorial lifestyle photography, warm natural light, suggesting security and peace of mind. "
            "No text, no watermarks."
        ),
    },
    {
        "filename": "hero-6.jpg",
        "prompt": (
            "Cinematic photograph of a modern vehicle dashboard showing digital instrument cluster and infotainment screen in a clean "
            "interior. Soft ambient lighting, premium vehicle feel. Through the windscreen, a New Zealand rural road stretches ahead. "
            "Editorial automotive interior photography, premium and trustworthy mood. "
            "No text, no watermarks."
        ),
    },
    {
        "filename": "hero-7.jpg",
        "prompt": (
            "Wide cinematic photograph of a roadside assistance van in hi-visibility yellow/orange helping a stranded vehicle on a "
            "New Zealand highway. The scene is reassuring — help has arrived. Dramatic New Zealand sky with mountains in background. "
            "The mood is relief, safety, and professionalism. Editorial photography style. "
            "No text, no watermarks, no logos."
        ),
    },
    {
        "filename": "hero-8.jpg",
        "prompt": (
            "Aerial cinematic photograph of New Zealand city traffic on a multi-lane highway at dusk, showing a diverse mix of modern "
            "vehicles including SUVs, sedans, and EVs. Auckland or Wellington motorway. City lights beginning to glow. "
            "Professional aerial photography style, warm urban atmosphere suggesting the importance of vehicle protection. "
            "No text, no watermarks."
        ),
    },
]

# ============================================================
# GENERATION FUNCTION
# ============================================================
def generate_image(prompt: str, filename: str) -> bool:
    """Generate a single image using Gemini Imagen API."""
    print(f"\n🎨 Generating {filename}...")
    print(f"   Prompt: {prompt[:80]}...")

    url = f"https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-002:predict?key={GEMINI_API_KEY}"

    payload = {
        "instances": [{"prompt": prompt}],
        "parameters": {
            "sampleCount": 1,
            "aspectRatio": "16:9",
            "safetyFilterLevel": "block_few",
            "personGeneration": "allow_adult",
        },
    }

    try:
        response = requests.post(url, json=payload, timeout=60)
        if response.status_code != 200:
            print(f"   ❌ API error {response.status_code}: {response.text[:200]}")
            return False

        data = response.json()
        predictions = data.get("predictions", [])
        if not predictions:
            print(f"   ❌ No predictions returned")
            return False

        image_data = predictions[0].get("bytesBase64Encoded")
        if not image_data:
            print(f"   ❌ No image data in response")
            return False

        # Decode and process image
        img_bytes = base64.b64decode(image_data)
        img = Image.open(io.BytesIO(img_bytes)).convert("RGB")
        print(f"   ✅ Generated: {img.size[0]}x{img.size[1]}px")

        # Resize to 1920x1080 with centre crop
        orig_w, orig_h = img.size
        ratio = max(TARGET_WIDTH / orig_w, TARGET_HEIGHT / orig_h)
        new_w = int(orig_w * ratio)
        new_h = int(orig_h * ratio)
        img = img.resize((new_w, new_h), Image.LANCZOS)

        left = (new_w - TARGET_WIDTH) // 2
        top = (new_h - TARGET_HEIGHT) // 2
        img = img.crop((left, top, left + TARGET_WIDTH, top + TARGET_HEIGHT))

        # Save
        output_path = os.path.join(OUTPUT_DIR, filename)
        img.save(output_path, "JPEG", quality=JPEG_QUALITY, optimize=True)
        size_kb = os.path.getsize(output_path) // 1024
        print(f"   💾 Saved: {output_path} ({size_kb}KB)")
        return True

    except Exception as e:
        print(f"   ❌ Error: {e}")
        return False


def main():
    print("=" * 60)
    print("BreakdownInsurance.co.nz — Gemini Image Generator")
    print("=" * 60)

    os.makedirs(OUTPUT_DIR, exist_ok=True)

    if not GEMINI_API_KEY or GEMINI_API_KEY == "YOUR_API_KEY_HERE":
        print("\n❌ ERROR: Set GEMINI_API_KEY environment variable")
        print("   export GEMINI_API_KEY='your-key-here'")
        sys.exit(1)

    print(f"\n📁 Output directory: {OUTPUT_DIR}")
    print(f"📐 Target size: {TARGET_WIDTH}x{TARGET_HEIGHT}px")
    print(f"🖼️  Images to generate: {len(IMAGE_PROMPTS)}")

    success_count = 0
    for i, item in enumerate(IMAGE_PROMPTS, 1):
        print(f"\n[{i}/{len(IMAGE_PROMPTS)}]", end="")
        if generate_image(item["prompt"], item["filename"]):
            success_count += 1
        if i < len(IMAGE_PROMPTS):
            print("   ⏳ Waiting 3 seconds...")
            time.sleep(3)

    print(f"\n{'=' * 60}")
    print(f"✅ Complete! {success_count}/{len(IMAGE_PROMPTS)} images generated.")
    if success_count > 0:
        print(f"\nNext step:")
        print(f"  cd {os.path.dirname(os.path.dirname(os.path.abspath(__file__)))}")
        print(f"  npm run build")
        print(f"  Then deploy to GitHub Pages")


if __name__ == "__main__":
    main()
