// Define your parameters
let currentScene = 0;

// Scene definitions
const scenes = [
    {
        title: "Number of Cases",
        description: `The CDC gov website definitively stated on May 1st, 2024, that hospitals are no longer required to report any data related to the admission of patients with the Coronavirus (COVID-19) to the Department of Health and Human Services (HHS) through the CDC's National Healthcare Safety Network (NHSN). However, the CDC demands that hospitals report any data related to the pandemic voluntarily. 
        The global impact of the pandemic is undeniable. Since 2020, it has had a significant impact on health, economies, and the population's daily lives. The number of cases skyrocketed, especially during 2020 and 2021. This led to a surge in severe cases and mortality rates. However, the widespread vaccination campaigns have undoubtedly reduced these rates. Despite these advances, the world still faces the challenge of the ongoing circulation of the virus, with periodic surges attributed to new variants. Nevertheless, the world's health systems remain vigilant and committed to monitoring and maintaining efforts to manage the virus while addressing other public health needs.  
        Monitoring the effects of public health management and policy-making depends on the number of cases. While tracking the virus' spread and speed, managing allocated resources, and implementing targeted interventions are crucial, they are not the only factors to consider. 

        This website meets the course requirements for CS 416 (Data Visualization) at UIUC. The data for this assignment was obtained from the World Health Organization (WHO) Coronavirus (Covid-19) Dashboard. The raw data is available here: https://data.who.int/dashboards/covid19/cases?n=c. The data was filtered to show deaths between January 2020 and October 2022.`,
        draw: drawCasesScene
    },
    {
        title: "Deaths",
        description: `The number of deaths is also a key factor. We must consider other metrics, such as the number of deaths.  The number of deaths reached its highest point in January 2021, before the vaccination program was implemented. A second peak occurred one year later, in January 2022, due to the emergence of the Delta variant. 
        Knowing the number of deaths from COIVD-19 is essential for understanding the severity of the pandemic and its impact on public health. This information is essential for understanding the effectiveness of interventions, allocating medical resources, and prioritizing vaccination efforts. It is essential that accurate death numbers inform health guidelines, ensuring they are based on the most severe outcomes.`,
        draw: drawDeathsScene
    },
    {
        title: "Mortality Rate",
        description: `The mortality rate is the proportion of deaths among confirmed cases of COIVD-19. It provides a comprehensive and precise understanding of the virus's lethality and public health impact. The mortality rate is the only way to compare the severity of the pandemic across different regions, periods, and population groups. The number of deaths does not provide this information. The graphic clearly shows that the mortality rate reached its highest point in February 2020, at the start of the pandemic. At that time, there were no preventive measures in place, so the authorities had no choice but to put entire countries under lockdown. A few months later, the mortality rate was drastically reduced and remained relatively low until early 2021. This was caused by increased gatherings due to the holidays and the spread of the Delta variant, which is known to be more deadly than the previous variants. Another peak occurred around March 2022 due to several states relaxing pandemic preventive measures such as the mandatory use of face masks.

        Further insights can be gained by filtering and zooming in on the graph over the next two pages.`,
        draw: drawMortalityRateScene
    }
];

// Set up initial scene
function setupScene(sceneIndex) {
    // Clear existing content
    d3.select("#visualization").html("");
    
    // Add title and description
    const scene = scenes[sceneIndex];
    d3.select("#visualization").append("h1").text(scene.title);
    d3.select("#visualization").append("p").text(scene.description);
    
    // Draw the scene
    scene.draw();
}

// Draw functions for each scene
function drawCasesScene() {
    // Example of drawing a chart
    const svg = d3.select("#visualization").append("svg").attr("width", 800).attr("height", 600);
    // Add your D3 code to draw the "Number of Cases" scene
}

function drawDeathsScene() {
    // Example of drawing a chart
    const svg = d3.select("#visualization").append("svg").attr("width", 800).attr("height", 600);
    // Add your D3 code to draw the "Deaths" scene
}

function drawMortalityRateScene() {
    // Example of drawing a chart
    const svg = d3.select("#visualization").append("svg").attr("width", 800).attr("height", 600);
    // Add your D3 code to draw the "Mortality Rate" scene
}

// Handle next and previous buttons
d3.select("#nextScene").on("click", function() {
    if (currentScene < scenes.length - 1) {
        currentScene++;
        setupScene(currentScene);
    }
});

d3.select("#previousScene").on("click", function() {
    if (currentScene > 0) {
        currentScene--;
        setupScene(currentScene);
    }
});

// Initial setup
setupScene(currentScene);
