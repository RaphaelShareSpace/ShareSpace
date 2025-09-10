document.querySelectorAll('.accordion').forEach(btn => {
    // ouvrir/fermer le panel au clic
    btn.addEventListener('click', function() {
        const panel = btn.nextElementSibling;
        const isOpen = panel.style.display === "block";
        // ferme tous les panels
        document.querySelectorAll('.panel').forEach(panel => {
            panel.style.display = "none";
        });
        document.querySelectorAll('.accordion').forEach(b => b.classList.remove('active'));
        // ouvre le panel correspondant si fermé, sinon referme tout
        if (!isOpen) {
            panel.style.display = "block";
            btn.classList.add('active');
        }
    });

    btn.addEventListener('mouseenter', function() {
        const panel = btn.nextElementSibling;
        const relatedTerms = Array.from(panel.querySelectorAll('.related-term')).map(rt => rt.textContent.trim());
        // pour chaque accordion, surbrillance si lié, sinon estompe
        document.querySelectorAll('.accordion').forEach(otherBtn => {
            if (otherBtn === btn) {
                otherBtn.classList.add('hovered');
                otherBtn.classList.remove('related', 'faded');
            } else if (relatedTerms.includes(otherBtn.textContent.trim())) {
                otherBtn.classList.add('related');
                otherBtn.classList.remove('hovered', 'faded');
            } else {
                otherBtn.classList.add('faded');
                otherBtn.classList.remove('hovered', 'related');
            }
        });
    });
    btn.addEventListener('mouseleave', function() {
        document.querySelectorAll('.accordion').forEach(otherBtn => {
            otherBtn.classList.remove('hovered', 'related', 'faded');
        });
    });
});