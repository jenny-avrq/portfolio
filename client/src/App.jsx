import { useState } from "react";
import "./App.css";

const sections = [
    { id: "about", title: "About Me" },
    { id: "education", title: "Educational Background" },
    { id: "skills", title: "Skills" },
    { id: "projects", title: "Projects" },
    { id: "certifications", title: "Certifications and Trainings" },
    { id: "contact", title: "Contact Information" },
];

// Reusable component for each folder tab
function FolderTab({ section, isActive, onSelect }) {
    return (
        <button
            type="button"
            className={`folder-tab ${isActive ? "active" : ""}`}
            onClick={() => onSelect(section.id)}
            aria-pressed={isActive}
        >
            {section.title}
        </button>
    );
}

function App() {
    const [activeTab, setActiveTab] = useState("");

    function handleTabClick(sectionId) {
        setActiveTab(sectionId);

        document.getElementById(sectionId)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }

    return (
        <main className="portfolio-page" id="top">
            <header className="site-header">
                <span className="site-brand">JENNY AVORQUE</span>
                <span className="site-description">IT Student Portfolio</span>
            </header>

            {/* Cover Page */}
            <section className="hero">
                <p className="eyebrow">Welcome to My Portfolio</p>

                <h1>
                    Port<span>folio.</span>
                </h1>

                <div className="folder">
                    <nav className="folder-tabs" aria-label="Portfolio Sections">
                        {sections.map(
                            (section) => (
                                <FolderTab
                                    key={section.id}
                                    section={section}
                                    isActive={activeTab === section.id}
                                    onSelect={handleTabClick}
                                />
                            )
                        )}
                    </nav>

                    <div className="folder-body">
                        <div className="hero-info">
                            <p className="eyebrow">HELLO, I'M</p>
                            
                            <h2>Jenny</h2>
                            
                            <p className="hero-description">
                                IT Student & Backend Developer
                            </p>

                            <p>Building web and mobile applications through problem-solving, and continuous learning.</p>

                            <button
                                className="explore-button"
                                onClick={() => handleTabClick("projects")}
                            >
                                Explore My Work
                            </button>
                        </div>

                        <div className="photo-frame">
                            <div className="photo-placeholder">
                                <span>YOUR PHOTO HERE</span>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="scroll-hint">SCROLL TO EXPLORE MORE</p>
            </section>

            {/* Temporary placeholder for the six sections */}
            {sections.map(
                (section, index) => (
                    <section
                        id={section.id}
                        className="content-section"
                        key={section.id}
                    >
                        <div className="section-card">
                            <span className="section-number">
                                SECTION {String(index + 1).padStart(2, "0")}
                            </span>

                            <h2>{section.title}</h2>

                            <p>We'll build the content for this section in our next lessons.</p>
                        </div>
                    </section>
                )
            )}

            <footer className="footer">
                <p>Made with React | MERN Portfolio</p>
            </footer>
        </main>
    );
}

export default App;