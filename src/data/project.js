import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";

const projects = [
  {
    id: 1,
    title: "বাজার দর (BazarDor) - Commodity Price Tracker",
    image: project1,
    category: "Full-Stack Web Application",
    technologies: [
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "Better Auth",
      "MongoDB"
    ],
    description:
      "A modern daily commodity price tracker for consumers across Bangladesh. It shows fluctuating market rates with a live price marquee, highlights daily price increases and decreases, compares minimum, maximum and average prices across divisions and markets, and offers authenticated users profile management with Google, GitHub or email/password sign-in.",
    live: "https://bazar-dor-v9e1.vercel.app/",
    github: "https://github.com/Mahidul-Badhon/bazar-dor",
    challenges: [
      "Displaying prices with dynamic Bengali numerals, unit definitions and visual surge/drop indicators",
      "Building responsive division and market-wise comparison tables that turn into cards on mobile",
      "Securing routes with Next.js middleware and Better Auth across Google, GitHub and credentials providers"
    ],
    future: [
      "Price history charts and trend analysis for each commodity",
      "Price drop alerts and a favorites list for logged-in users",
      "Bengali / English language toggle"
    ],
  },
  {
    id: 2,
    title: "FitLog - Workout Planner & Tracker",
    image: project2,
    category: "Fitness Web App",
    technologies: [
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "React Context API",
      "React Toastify"
    ],
    description:
      "A workout companion for training with intent and logging every set. Browse a library of twelve exercises covering major muscle groups, view step-by-step instructions, equipment and difficulty, build a daily plan, mark exercises as done, and watch planned exercises, minutes and calories update live on a metrics dashboard.",
    live: "https://assignment-6-mauve-three.vercel.app/",
    github: "https://github.com/Mahidul-Badhon/assignment-6",
    challenges: [
      "Sharing today's plan and live metrics across components with React Context",
      "Keeping totals for exercises, minutes and calories in sync as items are added, completed or removed",
      "Implementing save-for-later and sorting by duration, calories or rating"
    ],
    future: [
      "Persisting plans and workout history with localStorage or a database",
      "User authentication with progress charts over weeks",
      "Custom exercises and a built-in rest timer"
    ],
  },
  {
    id: 3,
    title: "Formalin Unit Converter",
    image: project3,
    category: "Utility Web Tool",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)"
    ],
    description:
      "A lightweight, browser-based unit converter for formaldehyde (formalin) concentrations. Built with plain HTML, CSS and JavaScript, it lets users enter a value and instantly get the converted result without any framework or installation.",
    live: "https://mahidul-badhon.github.io/Formalin-Unit-Converter/",
    github: "https://github.com/Mahidul-Badhon/Formalin-Unit-Converter",
    challenges: [
      "Implementing accurate conversion logic between different concentration units",
      "Validating user input and handling edge cases such as empty or invalid values",
      "Building a clean, responsive interface using only vanilla HTML, CSS and JavaScript"
    ],
    future: [
      "Support for more units and chemicals",
      "Conversion history and a copy-to-clipboard button",
      "Rebuilding the tool in React with unit tests"
    ],
  },
];

export default projects;
export { projects };

