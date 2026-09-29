This folder will hold images and static assets used by the React app.

Run one of the provided scripts to download assets from the live site into this folder.

Windows PowerShell:

    powershell -ExecutionPolicy Bypass -File scripts\download-assets.ps1

Linux/macOS:

    ./scripts/download-assets.sh

After downloading, start the dev server:

    npm install
    npm start

If you have local images (for example `rs=w_984,h_1478.webp` on your Desktop), copy them into this folder and give them the filename `ai-elite-984x1478.webp` so the app can use them for the AI program card.

Windows PowerShell example (run in an elevated prompt if necessary):

    Copy-Item "C:\Users\Admin\OneDrive\Desktop\rs=w_984,h_1478.webp" `
      "D:\Techfoundry Website\techfoundry-react\public\assets\ai-elite-984x1478.webp"

After copying, run:

    npm start

To download curated royalty-free photos into `public/assets`, run the included script from the project root:

Windows PowerShell:

    powershell -ExecutionPolicy Bypass -File .\scripts\download-photos.ps1

macOS / Linux:

    ./scripts/download-photos.sh

The script saves files like `ai.jpg`, `web.jpg`, `software.jpg`, `founder-1.jpg`, etc., which the app references locally.

