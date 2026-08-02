# 🎮 QuizPlay - Interactive Quiz & Gaming Platform

QuizPlay is a modern, responsive web application built with **React** and **Vite**, offering users an interactive quiz platform with real-time quiz sessions, engaging card carousels, user authentication workflows, and category feeds.

---

## ✨ Features

### 🧠 Interactive Quiz Engine
- **Live Quiz Modals**: Play multiple quiz categories including *KBC Quiz*, *Science Quiz*, and *Photo Quiz*.
- **Real-Time Score & Progress**: Automatic score calculation, percentage progress bar, question navigation (*Previous / Next / Finish*), and final results summary.

### 🎠 Dynamic 3D Coverflow Carousel
- Interactive 3D Coverflow slider powered by **Swiper** showcasing featured quizzes.
- One-click **"Play Now"** button to launch quiz modal directly from carousel cards.

### 🔐 User Authentication & Modal Workflows
- **Login Modal**: Mobile number validation and step-by-step OTP screen (`OtpScreen`).
- **Register Modal**: Complete registration form with input validation (Name, Phone Number, Password confirmation).
- Seamless modal manager for easy switching between Login, Registration, and Quiz modals.

### 🕹️ Game Discovery & Pages
- **Ongoing Games**: Live/active game showcase available on Home and dedicated `/ongoingGames` route.
- **All Games Gallery**: Comprehensive game catalog and grid layout (`/allGames`).
- **Latest Feed**: News and updates section (`/latestFeed`).
- Dedicated navigation routes for **Store**, **Community**, and **About** pages.

### 📱 Responsive & Modern UI/UX
- Mobile-first responsive layout utilizing **Bootstrap 5** and **React-Bootstrap**.
- Clean navigation bar (`AppNavbar`) with active route tracking via `NavLinkContext`.
- Modern icons powered by **React Icons**.

---

## 🛠️ Tech Stack

- **Core**: [React 18](https://react.dev/), [Vite](https://vitejs.dev/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **UI Components & Styling**: [Bootstrap 5](https://getbootstrap.com/), [React-Bootstrap](https://react-bootstrap.github.io/), Custom CSS
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Carousel & Slider**: [Swiper 11](https://swiperjs.com/) (Coverflow, Autoplay, Navigation, Pagination)
- **Code Quality**: [ESLint 9](https://eslint.org/)

---

## 📁 Project Structure

```text
quiz-play/
├── public/                # Static public assets
├── src/
│   ├── Assets/            # Images, styles, and carousel datasets
│   │   ├── images/
│   │   ├── styles/
│   │   └── utils/
│   ├── components/        # Reusable UI components & modals
│   │   ├── AllGamesCards/
│   │   ├── AllGamesSwiper/
│   │   ├── AppNavbar/
│   │   ├── Footer/
│   │   ├── LatestFeedCards/
│   │   ├── Modals/        # QuizModal, LoginModal, RegisterModal, OtpScreen
│   │   └── OnGoingGamesSwiper/
│   ├── context/           # React Context (NavLinkContext)
│   ├── Pages/             # Page components (Home, AllGames, OnGoingGames, LatestFeed, etc.)
│   ├── App.jsx            # Main App layout & route definitions
│   ├── ModalManager.jsx   # Global modal state dispatcher
│   └── index.jsx          # Application entry point
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- `npm` or `yarn`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Dspatel204/quiz-play.git
   cd quiz-play
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Running the Application

- **Start Development Server**:
  ```bash
  npm run dev
  ```
  Open your browser and navigate to `http://localhost:5173`.

- **Build for Production**:
  ```bash
  npm run build
  ```

- **Preview Production Build**:
  ```bash
  npm run preview
  ```

- **Run Linter**:
  ```bash
  npm run lint
  ```

---

## 📝 License

This project is created for demonstration and educational purposes.
