# 🎬 Manohar Singh Portfolio - Admin Guide

## ✨ What's New?

Your portfolio is now **fully dynamic** and **editable from a beautiful admin panel** — no coding required! Everything is managed through **`data.json`** and the **`config.html`** admin panel.

---

## 🚀 Quick Start

### 1️⃣ **Edit Your Portfolio**
Visit: **`/config.html`** on your site
- Open: `https://manohar20059.github.io/Manohar-/config.html`
- Or click the **⚙️ Edit** button in the top navigation

### 2️⃣ **Make Changes**
The admin panel has 6 tabs:
- **Profile** - Edit name, title, bio, skills
- **Projects** - Add/remove projects
- **Services** - Add/remove services with prices
- **Social** - Add/remove social media links
- **Contact** - Update WhatsApp, email, phone
- **Export** - Download your data as backup

### 3️⃣ **Changes Save Automatically**
All data is stored in your browser's **localStorage** (no server needed!)

---

## 📁 File Structure

```
Manohar-/
├── index.html          ← Main portfolio (loads from data.json)
├── config.html         ← Admin panel for editing
├── data.json           ← Your portfolio data (JSON format)
├── styles.css          ← Styling
├── vfx.css             ← VFX effects
├── script.js           ← Original scripts
└── Img/                ← Your images folder
```

---

## 📊 Understanding data.json

Your portfolio data is stored in **`data.json`** in this format:

```json
{
  "profile": {
    "name": "Your Name",
    "title": "Your Title",
    "bio": "Short bio (for hero section)",
    "image": "Img/your-image.jpg",
    "about": "Long bio (for about section)"
  },
  "skills": ["Skill 1", "Skill 2", ...],
  "projects": [
    {
      "title": "Project Name",
      "description": "Project description",
      "image": "Img/project.jpg",
      "link": "project-detail.html",
      "category": "category-name"
    }
  ],
  "services": [
    {
      "title": "Service Name",
      "price": 30,
      "icon": "fas fa-icon",
      "trending": true,
      "whatsapp": "9079216393"
    }
  ],
  "social": [
    {
      "platform": "instagram",
      "handle": "@username",
      "url": "https://instagram.com/...",
      "stats": "1.8M Followers",
      "verified": true,
      "icon": "fab fa-instagram"
    }
  ],
  "contact": {
    "whatsapp": "9079216393",
    "email": "your@email.com",
    "phone": "+91-xxxxxxxxxx"
  }
}
```

---

## ✏️ How to Use the Admin Panel

### Adding a Project
1. Click **Projects** tab
2. Fill in:
   - **Project Title** - Name of your project
   - **Description** - What the project is about
   - **Image URL** - Path to the image (e.g., `Img/my-project.jpg`)
   - **Category** - Type of project (wedding, commercial, etc.)
3. Click **Add Project** ✓

### Adding a Service
1. Click **Services** tab
2. Fill in:
   - **Service Title** - What you're offering
   - **Price** - Service cost in USD
   - **Icon** - Font Awesome icon code (e.g., `fas fa-film`)
   - **Trending** - Check if it's your top service
3. Click **Add Service** ✓

### Adding Social Links
1. Click **Social** tab
2. Fill in:
   - **Platform** - Social media name (Instagram, YouTube, etc.)
   - **Handle** - Your username
   - **Profile URL** - Link to your profile
   - **Stats** - Followers/subscribers count
   - **Icon** - Font Awesome icon
3. Click **Add Social Link** ✓

---

## 🎨 Icon Codes (Font Awesome)

Popular icons you can use:

| Service | Icon Code |
|---------|-----------|
| Video Editing | `fas fa-film` |
| Motion Graphics | `fas fa-video` |
| Color Grading | `fas fa-palette` |
| Animation | `fas fa-cube` |
| Social Media | `fas fa-share-alt` |
| YouTube | `fab fa-youtube` |
| Instagram | `fab fa-instagram` |
| TikTok | `fab fa-tiktok` |
| Twitter | `fab fa-twitter` |
| Facebook | `fab fa-facebook-f` |
| LinkedIn | `fab fa-linkedin-in` |

[See all Font Awesome icons →](https://fontawesome.com/icons)

---

## 📤 Backup & Export

### Download Your Data
1. Open **config.html**
2. Click **Export** tab
3. Click **Download Complete Data (JSON)**
4. Keep the file safe!

### Restore From Backup
Coming soon! For now, you can manually update `data.json` in your repository.

---

## 🔄 How the Portfolio Updates

1. **You edit in config.html** → Data saves to browser localStorage
2. **Page refreshes** → index.html loads data from localStorage first
3. **If localStorage is empty** → index.html loads from `data.json`
4. **When you download** → You get your current data as JSON backup

---

## 🚀 Advanced Usage

### Sync Data to GitHub
If you want to save your changes permanently to GitHub:

1. Open **config.html**
2. Export your data
3. Go to GitHub → Edit `data.json`
4. Paste the exported JSON
5. Commit the changes

### Custom Images
- Store images in the `Img/` folder
- Reference them as: `Img/filename.jpg`
- Or use external URLs: `https://example.com/image.jpg`

### Custom Links
In Projects, you can change the `link` field to:
- External URLs: `https://your-project-url.com`
- Portfolio pages: `project-detail.html`
- YouTube embeds: `https://youtube.com/...`

---

## 🐛 Troubleshooting

### Changes not saving?
- Check if localStorage is enabled in your browser
- Clear cache and refresh
- Try a different browser

### Images not showing?
- Check the image path is correct
- Ensure images are in the `Img/` folder
- Use absolute URLs if relative paths don't work

### Services not appearing?
- Make sure you added them in the **Services** tab
- Check that `price` and `title` are filled
- Refresh the page

---

## 💡 Tips & Tricks

1. **Use high-quality images** - Minimum 800x600px recommended
2. **Keep bio concise** - Short descriptions work better
3. **Price competitively** - Research industry rates
4. **Update social links** - Keep them current and verified
5. **Add testimonials** - Coming soon feature!

---

## 📞 Need Help?

- Edit buttons: Look for ✏️ icon in config.html
- Export data: Use the **Export** tab for backups
- Reset everything: Clear localStorage in browser DevTools

---

## 🎯 Next Steps

1. ✅ Open `config.html`
2. ✅ Update your profile information
3. ✅ Add your projects
4. ✅ Add your services
5. ✅ Update social links
6. ✅ Share your updated portfolio! 🎉

---

**Happy editing! Your portfolio is now in your hands.** 🚀

---

*Last Updated: August 31, 2026*
