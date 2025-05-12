// Mobile Navigation Toggle
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
    
    if (visibility === 'true') {
        primaryNav.setAttribute('data-visible', 'false');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.innerHTML = '<span class="sr-only">Menu</span>';
        navToggle.style.display = '☰';
    } else {
        primaryNav.setAttribute('data-visible', 'true');
        navToggle.setAttribute('aria-expanded', 'true');
        navToggle.innerHTML = '<span class="sr-only">Close</span>';
        navToggle.style.display = '✕';
    }
});

// Newsletter Form Submission
const newsletterForm = document.getElementById('newsletter-form');
const subscriptionMessage = document.getElementById('subscription-message');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        
        // Simulate form submission
        setTimeout(() => {
            subscriptionMessage.textContent = `Thank you! ${email} has been subscribed.`;
            subscriptionMessage.classList.add('success-message');
            this.reset();
            
            // Clear message after 5 seconds
            setTimeout(() => {
                subscriptionMessage.textContent = '';
                subscriptionMessage.classList.remove('success-message');
            }, 5000);
        }, 1000);
    });
}

// Content for different pages
const pageContent = {
    blog: `
        <section class="blog-section">
            <div class="container">
                <h1>Blog Posts</h1>
                <div class="posts-grid">
                    <article class="post-card" data-id="1">
                        <div class="post-image" style="background-image: url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')"></div>
                        <div class="post-content">
                            <div class="post-tag">Mindfulness</div>
                            <h3>Finding Peace in Daily Routines</h3>
                            <p>Discover how simple daily habits can transform your mental well-being and create lasting inner peace.</p>
                            <div class="post-meta">
                                <span class="date">May 10, 2025</span>
                                <span class="read-time">5 min read</span>
                            </div>
                            <a href="#" class="read-more" onclick="loadArticle(1)">Read article</a>
                        </div>
                    </article>
                    <article class="post-card" data-id="2">
                        <div class="post-image" style="background-image: url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')"></div>
                        <div class="post-content">
                            <div class="post-tag">Productivity</div>
                            <h3>The Art of Deep Work</h3>
                            <p>Learn how focused work sessions can dramatically improve your productivity and creative output.</p>
                            <div class="post-meta">
                                <span class="date">May 8, 2025</span>
                                <span class="read-time">8 min read</span>
                            </div>
                            <a href="#" class="read-more" onclick="loadArticle(2)">Read article</a>
                        </div>
                    </article>
                    <article class="post-card" data-id="3">
                        <div class="post-image" style="background-image: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')"></div>
                        <div class="post-content">
                            <div class="post-tag">Balance</div>
                            <h3>Finding Work-Life Harmony</h3>
                            <p>Explore strategies for creating a meaningful balance between professional ambitions and personal fulfillment.</p>
                            <div class="post-meta">
                                <span class="date">May 5, 2025</span>
                                <span class="read-time">6 min read</span>
                            </div>
                            <a href="#" class="read-more" onclick="loadArticle(3)">Read article</a>
                        </div>
                    </article>
                    <article class="post-card" data-id="4">
                        <div class="post-image" style="background-image: url('https://images.unsplash.com/photo-1447078806655-40579c2520d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')"></div>
                        <div class="post-content">
                            <div class="post-tag">Wellness</div>
                            <h3>The Science of Better Sleep</h3>
                            <p>Understanding sleep cycles and how to optimize your rest for better health and cognitive function.</p>
                            <div class="post-meta">
                                <span class="date">May 1, 2025</span>
                                <span class="read-time">7 min read</span>
                            </div>
                            <a href="#" class="read-more" onclick="loadArticle(4)">Read article</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    `,
    about: `
        <section class="about-section">
            <div class="container">
                <h1>About MindfulBlog</h1>
                <p>Welcome to MindfulBlog, a space dedicated to exploring the intersection of mindfulness, productivity, and balanced living. Our mission is to provide thoughtful content that helps you navigate modern life with intention and purpose.</p>
                
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Our Team">
                
                <h2>Our Story</h2>
                <p>MindfulBlog began in 2023 as a personal project to document and share insights about living more intentionally in our fast-paced world. What started as a simple journal has grown into a community of like-minded individuals seeking balance and purpose.</p>
                
                <h2>Our Values</h2>
                <p>We believe in the power of small, consistent actions to create meaningful change. Our content focuses on practical approaches to mindfulness, evidence-based productivity techniques, and sustainable approaches to personal growth.</p>
                
                <h2>Meet the Team</h2>
                <p>Our small but dedicated team brings diverse perspectives and expertise to MindfulBlog. From psychology and neuroscience to meditation and productivity systems, we draw on various disciplines to provide well-rounded content.</p>
                
                <h2>Connect With Us</h2>
                <p>We love hearing from our readers! Share your thoughts, questions, or suggestions by following us on social media or subscribing to our newsletter for weekly insights.</p>
            </div>
        </section>
    `
};

// Articles content
const articles = {
    1: {
        title: "Finding Peace in Daily Routines",
        tag: "Mindfulness",
        date: "May 10, 2025",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        content: `
            <p>In our constantly connected and fast-paced world, finding moments of peace can seem like an impossible task. Yet, the answer might be hiding in plain sight—within our daily routines.</p>
            
            <p>Routines often get a bad reputation. They're associated with monotony, boredom, and a lack of spontaneity. However, when approached mindfully, daily routines can become powerful anchors for presence and peace in our lives.</p>
            
            <h2>The Power of Ritual</h2>
            <p>When we elevate a routine to a ritual by bringing our full attention to it, something remarkable happens. The mundane becomes meaningful. Consider your morning coffee or tea—instead of consuming it while scrolling through emails, try sitting in silence for those few minutes, feeling the warmth of the cup, noticing the aroma, and savoring each sip.</p>
            
            <p>This simple shift—bringing full awareness to an everyday activity—transforms it from a habitual behavior to a moment of mindfulness. These brief pauses throughout your day serve as reminders to return to the present moment.</p>
            
            <h2>Creating Mindful Transitions</h2>
            <p>Our days are filled with transitions: from sleep to wakefulness, from home to work, from one task to another. These transitions offer natural opportunities to practice mindfulness.</p>
            
            <p>Before starting your workday, take three deep breaths. When switching between tasks, pause for a moment to clear your mind. As you return home, take a minute in your car or outside your door to set an intention for how you want to be present with your family or for yourself.</p>
            
            <h2>Finding Peace in Movement</h2>
            <p>Movement-based routines provide excellent opportunities for mindfulness. Whether it's your morning shower, walking to get lunch, or an evening stroll, bring awareness to the physical sensations and the environment around you.</p>
            
            <p>Notice the feeling of water on your skin, the rhythm of your footsteps, or the sounds of nature as you walk. These everyday movements become meditative practices when approached with intention and awareness.</p>
            
            <h2>The Bedtime Wind-Down</h2>
            <p>The end of the day offers a precious opportunity to cultivate peace. Create a consistent bedtime routine that signals to your body and mind that it's time to rest. This might include putting away electronic devices, reading something uplifting, gentle stretching, or a brief meditation.</p>
            
            <p>The key is consistency and presence. By following the same sequence nightly and bringing your full attention to each step, you train your nervous system to move into a state of relaxation.</p>
            
            <h2>Getting Started</h2>
            <p>Begin by selecting just one daily activity to transform into a mindful ritual. It could be as simple as your first drink of water in the morning or washing your hands throughout the day. The activity itself doesn't matter as much as your approach to it.</p>
            
            <p>Set reminders if needed, perhaps placing a small symbol or note near where the activity takes place. Over time, add more mindful moments to your day, creating a life punctuated by peace rather than stress.</p>
            
            <p>Remember that mindfulness is not about adding more to your to-do list—it's about bringing quality attention to what you're already doing. In this way, peace becomes not something you occasionally find but something you consistently cultivate through the simple routines of daily life.</p>
        `
    },
    2: {
        title: "The Art of Deep Work",
        tag: "Productivity",
        date: "May 8, 2025",
        readTime: "8 min read", 
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        content: `
            <p>In today's distraction-filled world, the ability to focus deeply on cognitively demanding tasks has become increasingly rare—and increasingly valuable. Cal Newport, author of "Deep Work," defines this skill as "the ability to focus without distraction on a cognitively demanding task."</p>
            
            <p>This article explores the principles of deep work and offers practical strategies for incorporating this powerful practice into your professional life.</p>
            
            <h2>Understanding Deep Work</h2>
            <p>Deep work stands in contrast to "shallow work"—tasks that are logistical, easily replicated, and often performed while distracted. Emails, meetings, and administrative tasks typically fall into this category. While necessary, shallow work doesn't create much new value or improve your skills.</p>
            
            <p>Deep work, on the other hand, pushes your cognitive capabilities to their limit. It creates new value, improves your skills, and is hard to replicate. Writing, coding, strategic planning, and learning complex concepts are examples of deep work.</p>
            
            <h2>The Benefits of Deep Work</h2>
            <p>Engaging in regular deep work offers numerous advantages:</p>
            
            <p><strong>Enhanced productivity:</strong> You can accomplish more high-quality work in less time when deeply focused.</p>
            
            <p><strong>Skill development:</strong> Deliberate practice through deep work accelerates learning and mastery.</p>
            
            <p><strong>Work satisfaction:</strong> The state of flow often achieved during deep work leads to greater job satisfaction.</p>
            
            <p><strong>Competitive advantage:</strong> As deep work becomes rarer, those who cultivate this skill gain a significant edge.</p>
            
            <h2>Strategies for Implementing Deep Work</h2>
            
            <h3>1. Schedule Deep Work Sessions</h3>
            <p>Block specific times in your calendar dedicated solely to deep work. Start with 60-90 minute sessions if you're new to this practice, gradually working up to longer periods as your "focus muscles" strengthen. Treat these appointments with yourself as seriously as you would meetings with important clients.</p>
            
            <h3>2. Create a Distraction-Free Environment</h3>
            <p>Identify your common distractions and systematically eliminate them during deep work sessions. This might mean:</p>
            <p>• Silencing your phone and placing it out of sight</p>
            <p>• Closing email and messaging applications</p>
            <p>• Using website blockers for social media and news sites</p>
            <p>• Working in a quiet location or using noise-canceling headphones</p>
            <p>• Informing colleagues you'll be unavailable during certain hours</p>
            
            <h3>3. Establish Rituals</h3>
            <p>Create pre-work rituals that signal to your brain it's time for focused effort. This might include:</p>
            <p>• Preparing your workspace</p>
            <p>• Brewing a specific tea or coffee</p>
            <p>• A brief meditation or breathing exercise</p>
            <p>• Setting a clear intention for the session</p>
            
            <h2>Overcoming Common Challenges</h2>
            
            <h3>Mental Resistance</h3>
            <p>The mind often resists deep work initially, preferring the easy dopamine hits of shallow activities. Acknowledge this resistance without judgment, and gently redirect your attention back to the task. With practice, deep focus becomes easier.</p>
            
            <h3>Organizational Constraints</h3>
            <p>If your workplace culture emphasizes constant connectivity, you may need to negotiate boundaries. Propose a trial period where you're unavailable for certain hours but demonstrate increased productivity as a result.</p>
            
            <h2>Conclusion</h2>
            <p>Deep work isn't just a productivity technique—it's a philosophy that recognizes the profound value of focused cognitive exertion. In a world increasingly dominated by distraction, cultivating this skill may be one of the most rewarding professional investments you can make.</p>
            
            <p>Start small, be consistent, and watch as your capacity for meaningful work expands. The ability to dive deep doesn't just change what you produce—it transforms how you experience your work and, ultimately, your life.</p>
        `
    },
    3: {
        title: "Finding Work-Life Harmony",
        tag: "Balance",
        date: "May 5, 2025",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        content: `
            <p>The concept of "work-life balance" has dominated professional discourse for decades. It suggests that work and personal life are opposing forces requiring equal weight—like a scale that must be perfectly balanced. Yet for many, this framework creates more stress than resolution.</p>
            
            <p>Perhaps it's time to shift our thinking from balance to harmony.</p>
            
            <h2>From Balance to Harmony</h2>
            <p>Work-life harmony acknowledges that our professional and personal lives aren't separate entities but interconnected aspects of one life. Rather than compartmentalizing, harmony seeks integration and flow between different domains of our experience.</p>
            
            <p>Think of a symphony orchestra: Different instruments play at varying volumes throughout a piece. Sometimes the strings dominate; other times, they support while brass or percussion lead. The goal isn't equal volume from all sections at all times but a harmonious interplay that creates something beautiful.</p>
            
            <h2>The Problem with Balance</h2>
            <p>The traditional balance model presents several challenges:</p>
            
            <p><strong>It assumes opposition:</strong> Framing work and life as opposing forces that must be "balanced" creates an inherent tension.</p>
            
            <p><strong>It suggests static equilibrium:</strong> Life doesn't work in perfect 50/50 splits. Different periods require different allocations of energy.</p>
            
            <p><strong>It's mathematically impossible:</strong> For many, especially those in demanding careers or with significant family responsibilities, equal time distribution simply isn't realistic.</p>
            
            <h2>Principles of Work-Life Harmony</h2>
            
            <h3>1. Presence Over Division</h3>
            <p>Instead of dividing your hours equally, focus on being fully present in whatever you're doing. Quality of engagement often matters more than quantity of time. When you're working, work deeply. When you're with loved ones or pursuing personal interests, be fully there without digital distractions or mental preoccupation with work matters.</p>
            
            <h3>2. Integration Where Possible</h3>
            <p>Look for opportunities to blend work and personal values or activities. This might mean:</p>
            <p>• Building meaningful relationships with colleagues</p>
            <p>• Finding work that aligns with your core values</p>
            <p>• Incorporating elements of personal wellness into your workday</p>
            <p>• Involving family in appropriate work events</p>
            
            <h3>3. Rhythms Over Rigidity</h3>
            <p>Recognize that life moves in seasons and cycles, not fixed states. There will be intensive work periods balanced by quieter times. The key is creating sustainable rhythms rather than maintaining rigid boundaries.</p>
            
            <h2>Practical Steps Toward Harmony</h2>
            
            <h3>Identify Your Non-Negotiables</h3>
            <p>What matters most in each domain of your life? These become your anchors—the commitments you honor regardless of other demands. For example:</p>
            <p>• Family dinner three nights per week</p>
            <p>• Morning exercise routine</p>
            <p>• Core work hours of deep focus</p>
            <p>• Weekly date night or personal creative time</p>
            
            <h3>Create Meaningful Transitions</h3>
            <p>Develop rituals that help you shift gears between different areas of life. These might include:</p>
            <p>• A brief meditation at the end of the workday</p>
            <p>• A walk around the block before entering your home</p>
            <p>• Changing clothes to signal the shift from work to home mode</p>
            <p>• A closing ritual to mentally "complete" your workday</p>
            
            <h3>Practice Regular Reflection</h3>
            <p>Set aside time weekly or monthly to assess how your various life domains are harmonizing:</p>
            <p>• Are you honoring your non-negotiables?</p>
            <p>• Which areas need more attention in the coming week?</p>
            <p>• Are there conflicts that need resolution?</p>
            <p>• What adjustments would create greater harmony?</p>
            
            <h2>Conclusion</h2>
            <p>Work-life harmony isn't a perfect state to achieve but an ongoing process of integration, adjustment, and presence. By shifting from the rigid concept of balance to the more fluid idea of harmony, we open ourselves to a more realistic and ultimately more fulfilling approach to navigating the complex interplay between our professional and personal lives.</p>
            
            <p>The goal isn't perfect equilibrium but a life that, when viewed as a whole, creates a meaningful and satisfying composition—with each element contributing its unique and necessary part to the overall symphony.</p>
        `
    }
};

// Load different page content
function loadPage(page) {
    const pageContentElement = document.getElementById('page-content');
    
    // Add fade out effect
    pageContentElement.style.opacity = 0;
    
    // Update navigation active state
    document.querySelectorAll('.primary-navigation li').forEach(item => {
        item.classList.remove('active');
    });
    
    // Find and activate the correct nav item
    const activeNavItem = document.querySelector(`.primary-navigation li a[onclick="loadPage('${page}')"]`);
    if (activeNavItem) {
        activeNavItem.parentElement.classList.add('active');
    }
    
    // After a short delay, update content and fade back in
    setTimeout(() => {
        pageContentElement.innerHTML = pageContent[page];
        pageContentElement.style.opacity = 1;
        
        // If mobile nav is open, close it
        if (primaryNav.getAttribute('data-visible') === 'true') {
            primaryNav.setAttribute('data-visible', 'false');
            navToggle.setAttribute('aria-expanded', 'false');
        }
        
        // Scroll to top
        window.scrollTo(0, 0);
    }, 300);
}

// Load article content
function loadArticle(id) {
    const article = articles[id];
    const pageContentElement = document.getElementById('page-content');
    
    // Add fade out effect
    pageContentElement.style.opacity = 0;
    
    // After a short delay, update content and fade back in
    setTimeout(() => {
        pageContentElement.innerHTML = `
            <article class="article-content">
                <div class="container">
                    <header class="article-header">
                        <div class="post-tag">${article.tag}</div>
                        <h1>${article.title}</h1>
                        <div class="post-meta">
                            <span class="date">${article.date}</span>
                            <span class="read-time">${article.readTime}</span>
                        </div>
                    </header>
                    
                    <img src="${article.image}" alt="${article.title}" class="article-image">
                    
                    <div class="article-body">
                        ${article.content}
                    </div>
                </div>
            </article>
        `;
        
        pageContentElement.style.opacity = 1;
        
        // If mobile nav is open, close it
        if (primaryNav.getAttribute('data-visible') === 'true') {
            primaryNav.setAttribute('data-visible', 'false');
            navToggle.setAttribute('aria-expanded', 'false');
        }
        
        // Scroll to top
        window.scrollTo(0, 0);
    }, 300);
}

// Add active class to current page in navigation
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.primary-navigation li');
    
    navItems.forEach(item => {
        const link = item.querySelector('a');
        if (link.getAttribute('href') === window.location.pathname || 
            (window.location.pathname === '/' && link.getAttribute('href') === 'index.html')) {
            item.classList.add('active');
        }
    });
});