<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README - BACKROAD</title>
    <style>
        :root {
            --primary-color: #2a9d8f;
            --secondary-color: #264653;
            --accent-color: #e9c46a;
            --text-color: #333;
            --light-bg: #f8f9fa;
            --dark-bg: #343a40;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
            background-color: var(--light-bg);
        }
        
        .header {
            text-align: center;
            padding: 30px 0;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            border-radius: 8px;
            margin-bottom: 30px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        h1 {
            margin: 0;
            font-size: 2.5rem;
        }
        
        h2 {
            color: var(--primary-color);
            border-bottom: 2px solid var(--accent-color);
            padding-bottom: 5px;
            margin-top: 30px;
        }
        
        h3 {
            color: var(--secondary-color);
        }
        
        .badge {
            display: inline-block;
            padding: 3px 8px;
            background-color: var(--accent-color);
            color: var(--secondary-color);
            border-radius: 4px;
            font-size: 0.8rem;
            font-weight: bold;
            margin-right: 5px;
        }
        
        code {
            background-color: var(--dark-bg);
            color: white;
            padding: 2px 5px;
            border-radius: 3px;
            font-family: monospace;
        }
        
        pre {
            background-color: var(--dark-bg);
            color: white;
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
        }
        
        .feature-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        
        .feature-card {
            background: white;
            padding: 15px;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
            border-left: 4px solid var(--primary-color);
        }
        
        .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin: 20px 0;
        }
        
        .tech-item {
            background-color: var(--primary-color);
            color: white;
            padding: 5px 10px;
            border-radius: 20px;
            font-size: 0.9rem;
        }
        
        .screenshot {
            width: 100%;
            border-radius: 5px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin: 10px 0;
            border: 1px solid #ddd;
        }
        
        .footer {
            text-align: center;
            margin-top: 50px;
            padding: 20px;
            color: #666;
            font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
            body {
                padding: 15px;
            }
            
            .feature-list {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>BACKROAD Tours & Travels</h1>
        <p>Your gateway to unforgettable travel experiences</p>
    </div>

    <h2>📌 Project Overview</h2>
    <p>
        BACKROAD Tours is a comprehensive tours and travels website designed to help users discover, book, 
        and manage their travel experiences. This platform offers a seamless interface for browsing destinations, 
        comparing tour packages, and making reservations.
    </p>
    
    <div class="badge">Live Demo</div>
    <div class="badge">Responsive</div>
    <div class="badge">User-Friendly</div>

    <h2>✨ Key Features</h2>
    <div class="feature-list">
        <div class="feature-card">
            <h3>Destination Explorer</h3>
            <p>Interactive map and gallery to discover popular travel destinations with detailed information.</p>
        </div>
        <div class="feature-card">
            <h3>Tour Packages</h3>
            <p>Curated tour packages with filters for budget, duration, and activities.</p>
        </div>
        <div class="feature-card">
            <h3>Booking System</h3>
            <p>Secure online booking with real-time availability and instant confirmation.</p>
        </div>
        <div class="feature-card">
            <h3>Reviews & Ratings</h3>
            <p>Authentic traveler reviews and ratings for tours and destinations.</p>
        </div>
        <div class="feature-card">
            <h3>Mobile Responsive</h3>
            <p>Fully responsive design that works on all devices from desktop to mobile.</p>
        </div>
    </div>

    <h2>🛠️ Technology Stack</h2>
    <div class="tech-stack">
        <span class="tech-item">HTML5</span>
        <span class="tech-item">CSS3</span>
        <span class="tech-item">JavaScript</span>
    </div>

    
   <!-- <h2>📸 Screenshots</h2>
    <p><em>[Add your screenshots here with img tags]</em></p>-->   <!-- Example:
    <img src="screenshots/homepage.png" alt="Homepage Screenshot" class="screenshot">
    <img src="screenshots/booking.png" alt="Booking Page Screenshot" class="screenshot">
    -->

    <h2>🤝 Contributing</h2>
    <p>
        Contributions are welcome! Please fork the repository and create a pull request with your changes.
        For major changes, please open an issue first to discuss what you would like to change.
    </p>
    <h2> Team Members</h2>
    <p> Prachi --(Manager) 
        Ravleen Kaur --(Tester)
        Raman Kaur  ---(Developer)
        Pushkar Ahuja  ---(Developer)
        Piyush  --(Tester)</p>
    <h2>📧 Contact</h2>
    <p>
        For inquiries or support, please contact:<br>
        Project Link: <a href="https://github.com/prachi-657/Backroad">https://github.com/prachi-657/Backroad</a>
    </p>

    <div class="footer">
        <p>© 2023 Wanderlust Tours & Travels. All rights reserved.</p>
    </div>
</body>
</html>
