# Proportion Quiz

A simple web application that helps students practice solving problems involving **direct proportion** (tỉ lệ thuận) and **inverse proportion** (tỉ lệ nghịch) by setting up proportions and calculating the value of `x`. Designed for grade 4–5 students, the app provides random problems, instant answer checking, and a history of recent attempts.

## 🚀 Live Demo

Check out the live demo: [https://www.sieu.io.vn/github/proportion-quiz](https://www.sieu.io.vn/github/proportion-quiz)

## ✨ Features

- **Random Problems** – Questions are randomly generated from a `data.json` file, ensuring `x` is always an integer (no decimals).
- **Flexible Answer Checking** – Accepts multiple valid ways of setting up the proportion (swapping sides, cross-multiplication, etc.) as long as the math is correct (checked via `a × d = b × c`).
- **Instant Feedback** – Shows whether your answer is correct and displays a sample solution using the common method taught in Vietnamese textbooks.
- **Real-Time Statistics** – Tracks the number of questions attempted, correct answers, and accuracy percentage.
- **History of Last 5 Attempts** – View the last 5 problems, including the question, the correct answer, your answer, and the result.
- **Dark Mode & Responsive** – A clean, dark-themed interface that works well on mobile devices.
- **No External Libraries** – Lightweight and easy to deploy.

## 🛠️ Technologies Used

- **HTML5** – Structure of the application
- **CSS3** – Styling with Flexbox, gradients, and responsive design
- **JavaScript (Vanilla)** – Logic for generating problems, checking answers, and tracking statistics
- **JSON** – Data storage for question templates

## 📁 Project Structure

```
proportion-quiz/
├── index.html      # Main page
├── styles.css      # Dark theme, responsive layout
├── script.js       # Problem generation, answer checking, statistics, history
├── data.json       # Question templates (direct & inverse proportion)
└── README.md       # Project documentation
```

## 🔧 Installation & Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/lemasieu/proportion-quiz.git
   ```
2. **Navigate to the project folder**
   ```bash
   cd proportion-quiz
   ```
   
3. **Run the application with a local server**

⚠️ Important: This project loads data from a JSON file, so you need to use a local development server instead of opening `index.html` directly in your browser to avoid CORS issues.

- **Using VS Code** – Install the "Live Server" extension, right-click on `index.html`, and select "Open with Live Server"
- **Using Python** – Run `python -m http.server` (Python 3) or `python -m SimpleHTTPServer` (Python 2) and open `http://localhost:8000`
- **Using Node.js** – Install `http-server` globally (`npm install -g http-server`) and run `http-server` in the project folder

## 📝 How It Works

1. **A random problem is displayed** – The app picks a question from data.json and shows it on screen. The problem involves direct or inverse proportion, and you need to find the value of x.
2. **Set up the proportion** – Enter your proportion equation in the input field (e.g., a/b = c/x).
3. **Submit your answer** – Click the "Check" button to see if your proportion is correct.
4. **View feedback** – The app tells you whether your answer is correct and, if not, shows a sample solution.
5. **Track your progress** – The statistics panel updates in real time, showing your total attempts, correct answers, and accuracy percentage.
6. **Review recent attempts** – The last 5 problems are displayed in a history panel, including the question, the correct answer, your answer, and the result.

**How answer checking works:**

The app validates your proportion by checking if the cross-multiplication holds (`a × d = b × c`). This means you can write the proportion in different but mathematically equivalent ways and still be marked correct.

## 🤝 Contributing

Contributions are welcome! Feel free to submit a Pull Request or open an Issue.
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License
This project is open-source and available under the MIT License.
