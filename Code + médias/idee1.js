const btnAccordion = document.querySelectorAll('.accordion');
btnAccordion.forEach((btn) => {
    btn.addEventListener('click', btnAccodion_Click)
});

// gere le click sur les boutons en lien
document.querySelectorAll('.related-term').forEach(btnTermRelated => {
    btnTermRelated.addEventListener('click', function() {
        const term = this.textContent.trim();
        let panelToOpen;
        btnAccordion.forEach((btn) => {
            if (btn.textContent.trim() === term) {
                btn.classList.add("active");
                const pnl = btn.nextElementSibling;
                pnl.style.display = "block";
                pnl.scrollIntoView({ behavior: "smooth", block: "start" });
                panelToOpen = pnl;
            } else {
                btn.classList.remove("active");
                const pnl = btn.nextElementSibling;
                pnl.style.display = "none";
            }
        });
        // Après avoir ouvert le bon panel et fermé les autres, colorer les accordions liés
        if(panelToOpen) {
            colorRelatedTerms(panelToOpen);
        } else {
            nonCouleurBtnLien();
        }
    });
});

// gere le click sur un bouton panel (terme)
function btnAccodion_Click(){
    this.classList.toggle("active");
    const panelAccordion = this.nextElementSibling;
    // si le panel cliqué est ouvert, le ferme
    if(panelAccordion.style.display === "block"){
        panelAccordion.style.display = "none";
        nonCouleurBtnLien();
    }else{
        // fermer les autres panels ouverts
        document.querySelectorAll(".panel").forEach(elementsPannel => {
            elementsPannel.style.display = "none";
        })
        //ouvre le panel cliqué
        panelAccordion.style.display = "block";
        panelAccordion.classList.add("active")
        colorRelatedTerms(panelAccordion);
    }
}

function nonCouleurBtnLien(){
    document.querySelectorAll('.accordion').forEach(btn => {
            btn.style.color = "";
        });
}

function colorRelatedTerms(panelAccordion) {
    nonCouleurBtnLien();
    panelAccordion.querySelectorAll('.related-term').forEach(btnTerm => {
        document.querySelectorAll('.accordion').forEach(btn => {
            if(btn.textContent.trim() === btnTerm.textContent.trim()) {
                btn.style.color = "red";
            }
        });
    });
}