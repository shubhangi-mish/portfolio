# 🚀 Gen-Z Portfolio - Maximum Energy Edition

A chaotic but structured portfolio website with maximum Gen-Z energy! Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

### 🎮 Interactive Elements
- **Portal Landing**: Fall into your site with animated liquid typography
- **AI Companion**: A tiny AI mascot that says random quirky things
- **Chaos Toggle**: Make the site weird with random fonts and colors
- **Sticker Mode**: Add TikTok-like stickers all over the site
- **8-bit Mode**: Transform everything into pixel art
- **Resume Mode**: Clean, recruiter-friendly layout

### 🎯 Sections
- **Landing**: "Welcome to My Brain" with cycling taglines
- **Mosaic Art**: Interactive digital mosaic with clickable tiles
- **Font Playground**: Play with 6 different fonts and 4 animations
- **About**: Gamified stat card with animated avatar
- **Experience**: Interactive timeline with subway navigation
- **Projects**: Tile-based layout with polaroid frames and trading cards
- **Skills**: 3D rotating galaxy of skills
- **Contact**: Drag & drop message box with sticker contact methods

### 🎨 Design Features
- **Mosaic Art**: Interactive tile-based design with gradient colors
- **Font Playground**: 6 unique fonts (Fredoka One, Righteous, Orbitron, Press Start 2P, Rubik Vinyl, Silkscreen)
- **Font Animations**: Bounce, Wave, Glitch, and Rotate effects
- **Neon gradients** and glassmorphism effects
- **Animated stickers** and doodles everywhere
- **Dark mode** by default with bursts of pastel neon
- **Every section feels like a portal** to a new world
- **Custom scrollbar** with gradient colors

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🎮 How to Use

### Keyboard Shortcuts
- `Ctrl + C`: Toggle Chaos Mode
- `Ctrl + S`: Toggle Sticker Mode  
- `Ctrl + P`: Toggle 8-bit Mode
- `Ctrl + R`: Toggle Resume Mode

### Interactive Features
- **Click mosaic tiles**: Change their animations and see them grow
- **Font Playground**: Try different fonts and animations in real-time
- **Hover your name**: Watch it wobble and change fonts
- **Click the avatar**: Change expressions randomly
- **Drag contact stickers**: Drop them into the message box
- **Hover tech badges**: Watch them sparkle and glitch
- **Click project tiles**: Open detailed trading cards

## 🎨 Customization

### Personal Information
Update the following files with your information:

1. **Landing Section** (`components/LandingSection.tsx`)
   - Change "Your Name" to your actual name
   - Update taglines in the `taglines` array
   - Modify the subtitle text

2. **About Section** (`components/AboutSection.tsx`)
   - Update stats values and descriptions
   - Change avatar expressions
   - Modify special powers and descriptions

3. **Experience Section** (`components/ExperienceSection.tsx`)
   - Replace the `experiences` array with your work history
   - Update company names, roles, and achievements
   - Add your own tech stacks and floating elements

4. **Projects Section** (`components/ProjectsSection.tsx`)
   - Replace the `projects` array with your projects
   - Update project descriptions, tech stacks, and stats
   - Add your own demo and GitHub links

5. **Skills Section** (`components/SkillsSection.tsx`)
   - Modify the `skillCategories` array with your skills
   - Update skill levels and icons
   - Add or remove skill categories

6. **Contact Section** (`components/ContactSection.tsx`)
   - Update contact methods with your actual links
   - Change email addresses and social media handles
   - Modify the contact form fields

### Styling
- **Colors**: Update neon colors in `tailwind.config.js`
- **Animations**: Modify animation durations in `globals.css`
- **Fonts**: Change fonts in `globals.css`

### AI Companion Messages
Edit the `aiMessages` array in `components/AICompanion.tsx` to add your own quirky messages.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **3D Graphics**: Three.js (for future enhancements)
- **Notifications**: React Hot Toast

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page component
├── components/
│   ├── LandingSection.tsx   # Hero section with portal effect
│   ├── AboutSection.tsx     # Gamified about section
│   ├── ExperienceSection.tsx # Interactive timeline
│   ├── ProjectsSection.tsx  # Tile-based projects
│   ├── SkillsSection.tsx    # 3D skills galaxy
│   ├── ContactSection.tsx   # Drag & drop contact
│   ├── AICompanion.tsx      # AI mascot
│   ├── ChaosToggle.tsx      # Mode controls
│   ├── StickerMode.tsx      # Sticker animations
│   └── Navigation.tsx       # Site navigation
├── tailwind.config.js       # Tailwind configuration
├── package.json             # Dependencies
└── README.md               # This file
```

## 🎯 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms
The project works with any static hosting platform that supports Next.js.

## 🎨 Design Philosophy

This portfolio embraces the "chaotic but structured" aesthetic popular in Gen-Z culture:

- **Maximum Energy**: Every element has personality and movement
- **Playful Interactions**: Easter eggs and hidden features everywhere
- **Visual Hierarchy**: Important information is still clearly presented
- **Accessibility**: All interactive elements are keyboard accessible
- **Performance**: Optimized animations that don't impact performance

## 🤝 Contributing

Feel free to fork this project and make it your own! Some ideas for enhancements:

- Add more interactive 3D elements
- Create additional chaos modes
- Add sound effects and music
- Implement more AI companion features
- Add multiplayer features (why not?)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by the chaotic energy of TikTok and VSCO
- Built with love for the AI engineering community
- Special thanks to the Gen-Z aesthetic movement

---

**Remember**: The best code is written with a sense of wonder and a dash of chaos! 🚀✨ 