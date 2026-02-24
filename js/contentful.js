document.addEventListener("DOMContentLoaded", function() {
    const noticeBoard = document.getElementById('notice-board');

    // Hardcoded JSON "API" for easy updates
    const announcements = [
        {
            type: "Hiring",
            title: "Legal Assistant",
            description: "Seeking a career-focused candidate with an LLB degree and 1-2 years of practical experience in deceased estate administration.",
            requirements: "*Must submit: Detailed CV, Certified copies of ID & qualifications.",
            closingDate: "6 March 2026",
            applyEmail: "Fiona@nemadzivhananiattorneys.co.za"
        }
    ];

    noticeBoard.innerHTML = '';

    announcements.forEach(notice => {
        const noticeHTML = `
            <div class="announcement-card" style="display: flex; flex-direction: column; gap: 8px; animation: fadeUpCascade 0.5s ease forwards;">
                
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="background: var(--gold); color: white; padding: 3px 10px; border-radius: 4px; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
                        <i class="fas fa-briefcase" style="margin-right: 4px;"></i> ${notice.type}
                    </span>
                    <span style="font-size: 0.75rem; color: #e74c3c; font-weight: 600;">
                        <i class="fas fa-clock" style="margin-right: 3px;"></i> Closes: ${notice.closingDate}
                    </span>
                </div>
                
                <h4 style="color: var(--navy-dark); font-size: 1.15rem; margin: 4px 0 0 0;">${notice.title}</h4>
                
                <p style="font-size: 0.85rem; color: var(--text-grey); line-height: 1.4; margin: 0;">${notice.description}</p>
                
                <p style="font-size: 0.8rem; color: var(--navy-dark); font-weight: 600; margin: 0; padding: 4px 0 8px 0; border-bottom: 1px solid #eaeaea;">
                    ${notice.requirements}
                </p>
                
                <a href="mailto:${notice.applyEmail}?subject=Application: Legal Assistant - [Your Name]" class="btn-outline" style="color: var(--navy-dark); border-color: var(--navy-dark); align-self: flex-start; font-size: 0.8rem; padding: 6px 16px; margin-top: 4px;">
                    Email Full Application <i class="fas fa-arrow-right" style="margin-left: 5px;"></i>
                </a>

            </div>
        `;
        
        noticeBoard.innerHTML += noticeHTML;
    });
});