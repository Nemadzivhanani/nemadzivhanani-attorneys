document.addEventListener("DOMContentLoaded", function() {
    const noticeBoard = document.getElementById('notice-board');

    // This is our local "API" array. You can easily add more announcements here later!
    const announcements = [
        {
            type: "Hiring",
            title: "Position: Legal Assistant",
            description: "Nemadzivhanani R Inc is seeking a disciplined, career-focused Legal Assistant. The ideal candidate holds an LLB degree and has 1-2 years of practical experience in deceased estate administration.",
            closingDate: "6 March 2026",
            location: "Johannesburg & Roodepoort",
            applyEmail: "Fiona@nemadzivhananiattorneys.co.za"
        }
    ];

    // Clear the "Loading..." text
    noticeBoard.innerHTML = '';

    // Loop through the announcements and build the HTML card
    announcements.forEach(notice => {
        const noticeHTML = `
            <div class="announcement-card" style="display: flex; flex-direction: column; gap: 12px; animation: fadeUpCascade 0.5s ease forwards;">
                
                <span style="background: var(--gold); color: white; padding: 4px 12px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; align-self: flex-start; text-transform: uppercase; letter-spacing: 1px;">
                    <i class="fas fa-briefcase" style="margin-right: 5px;"></i> ${notice.type}
                </span>
                
                <h4 style="color: var(--navy-dark); font-size: 1.3rem; margin: 0;">${notice.title}</h4>
                
                <p style="font-size: 0.95rem; color: var(--text-grey); line-height: 1.5; margin: 0;">${notice.description}</p>
                
                <div style="font-size: 0.85rem; color: var(--navy-dark); font-weight: 500; background: #f4f4f4; padding: 10px; border-left: 3px solid var(--gold);">
                    <i class="fas fa-calendar-alt" style="color: var(--gold); margin-right: 5px;"></i> <strong>Closing Date:</strong> ${notice.closingDate}<br>
                    <i class="fas fa-map-marker-alt" style="color: var(--gold); margin-right: 5px; margin-top: 8px;"></i> <strong>Location:</strong> ${notice.location}
                </div>
                
                <a href="mailto:${notice.applyEmail}?subject=Application: Legal Assistant - [Your Name]" class="btn-outline" style="color: var(--navy-dark); border-color: var(--navy-dark); margin-top: 5px; align-self: flex-start; font-size: 0.85rem; padding: 8px 18px;">
                    Email CV to Apply <i class="fas fa-arrow-right" style="margin-left: 5px;"></i>
                </a>

            </div>
        `;
        
        noticeBoard.innerHTML += noticeHTML;
    });
});