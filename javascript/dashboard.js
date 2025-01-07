const dropdownBtn = document.querySelector(".dropbtn");
const dropdownContent = document.querySelector(".dropdown-content");
const monthYearList = document.getElementById("monthYearList");

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function generateMonthYearOptions() {
  const currentYear = new Date().getFullYear();
  let optionsHTML = "";

  for (let year = currentYear - 5; year <= currentYear + 5; year++) {
    for (let month = 0; month < 12; month++) {
      optionsHTML += `<li>${months[month]} ${year}</li>`;
    }
  }

  monthYearList.innerHTML = optionsHTML;

  const listItems = monthYearList.querySelectorAll("li");
  listItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Update button text while keeping the caret
      dropdownBtn.textContent = item.textContent + " "; // Add a space after the selected text
      // Add a space after the selected text
      dropdownContent.classList.remove("show");
    });
  });
}
generateMonthYearOptions();

dropdownBtn.addEventListener("click", () => {
  dropdownContent.classList.toggle("show");
});

// Doughnut

const data = {
  labels: ["8 lands", "6 apartments", "4 Houses"],
  datasets: [
    {
      label: "Sales Analytics",
      data: [60, 30, 10],
      backgroundColor: [
        "rgba(36, 26, 158, 1)",
        "rgba(38, 93, 168, 1)",
        "rgba(85, 102, 254, 1)",
      ],
      borderColor: [
        "rgba(36, 26, 158, 1)",
        "rgba(38, 93, 168, 1)",
        "rgba(85, 102, 254, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
const doughnutLabel = {
  id: "doughnutLabel",
  beforeDatasetsDraw(chart, args, pluginOptions) {
    const { ctx, data } = chart;

    ctx.save();
    const xCoor = chart.getDatasetMeta(0).data[0].x;
    const yCoor = chart.getDatasetMeta(0).data[0].y;
    ctx.font = "bold 13px sans-serif";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
      `${data.labels[0]}: ${data.datasets[0].data[0] + "%"}`,
      xCoor,
      yCoor
    );
  },
};

// config
const config = {
  type: "doughnut",
  data,
  options: {},
  plugins: [doughnutLabel],
};

const myChart = new Chart(document.getElementById("myChart"), config);

//  Bar Chart
const ctx = document.getElementById("bar-chart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Sun", "Mon", "Tue", "Thur", "Fri", "Sat"],
    datasets: [
      {
        label: "Total Investment Made",
        data: [60, 63, 44, 70, 95, 60],
        backgroundColor: "#5566FE",
        borderWidth: 1,
      },
      {
        label: "Total Projects Completed",
        data: [80, 43, 72, 24, 39, 85],
        backgroundColor: "#241A9E",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
