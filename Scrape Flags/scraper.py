import os
import requests
from bs4 import BeautifulSoup

# URL of the website containing the flags
url = "https://www.worldometers.info/geography/flags-of-the-world/"

# Directory to save the downloaded flag images
save_dir = "flags_of_the_world"
os.makedirs(save_dir, exist_ok=True)

# Function to download images
def download_image(image_url, save_path):
    response = requests.get(image_url)
    if response.status_code == 200:
        with open(save_path, 'wb') as file:
            file.write(response.content)

# Fetch the webpage content
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

# Find all flag images on the page
flag_images = soup.find_all('img')

# Download each image
for img in flag_images:
    image_url = img['src']
    if 'flag' in image_url:  # Ensure it's a flag image
        image_url = "https://www.worldometers.info" + image_url  # Full URL
        image_name = os.path.basename(image_url)
        save_path = os.path.join(save_dir, image_name)
        download_image(image_url, save_path)

print("Download complete.")
