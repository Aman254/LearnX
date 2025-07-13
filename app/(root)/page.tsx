import CourseCard from "@/components/Card/CourseCard";

const Home = () => {
  const courses = [
    {
      name: "Digital Marketing Essentials",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7",
      duration: "5 weeks",
      lessons: [
        { title: "Intro to Digital Marketing", duration: "1 week" },
        { title: "SEO & Content Strategy", duration: "1 week" },
        { title: "Social Media Marketing", duration: "1 week" },
        { title: "Email Marketing Basics", duration: "1 week" },
        { title: "Capstone Campaign Project", duration: "1 week" },
      ],
    },
    {
      name: "Data Analytics with Python",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      duration: "8 weeks",
      lessons: [
        { title: "Python for Data Analysis", duration: "2 weeks" },
        { title: "Data Wrangling & Pandas", duration: "2 weeks" },
        { title: "Data Visualization", duration: "2 weeks" },
        { title: "Statistical Inference", duration: "1 week" },
        { title: "Analytical Project", duration: "1 week" },
      ],
    },
    {
      name: "Beginner Project Management",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      duration: "6 weeks",
      lessons: [
        { title: "Project Management Fundamentals", duration: "1 week" },
        { title: "Agile & Scrum Basics", duration: "1 week" },
        { title: "Waterfall Methodology", duration: "1 week" },
        { title: "Risk and Stakeholder Management", duration: "1 week" },
        { title: "Tools & Software Overview", duration: "1 week" },
        { title: "Mock Project Execution", duration: "1 week" },
      ],
    },
    {
      name: "UX/UI Design Fundamentals",
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd",
      duration: "6 weeks",
      lessons: [
        { title: "Introduction to UX Principles", duration: "1 week" },
        { title: "Wireframing & Prototyping", duration: "1 week" },
        { title: "UI Design Tools (Figma/Adobe XD)", duration: "2 weeks" },
        { title: "User Research & Testing", duration: "1 week" },
        { title: "Portfolio Project", duration: "1 week" },
      ],
    },
    {
      name: "Cybersecurity for Beginners",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
      duration: "4 weeks",
      lessons: [
        { title: "Cyber Threats Overview", duration: "1 week" },
        { title: "Password & Encryption Basics", duration: "1 week" },
        { title: "Network Security Fundamentals", duration: "1 week" },
        { title: "Ethical Hacking Concepts", duration: "1 week" },
      ],
    },
    {
      name: "Financial Literacy & Personal Finance",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
      duration: "4 weeks",
      lessons: [
        { title: "Budgeting & Saving Strategies", duration: "1 week" },
        { title: "Understanding Credit & Debt", duration: "1 week" },
        { title: "Investing Basics (Stocks, ETFs)", duration: "1 week" },
        { title: "Retirement & Long-Term Planning", duration: "1 week" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard
              key={course.name}
              title={course.name}
              duration={course.duration}
              image={course.image}
              lessons={course.lessons.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
