import ApexCharts from 'apexcharts'
import './style.css'
import 'material-icons/iconfont/outlined.css'

document.querySelector('#app').innerHTML = `
  <div class="grid-container">

    <!-- Header -->
    <header class="header">
      <div class="menu-icon">
        <span class="material-icons-outlined">
          menu
        </span>
      </div>
      <div class="header-left">
        <span class="material-icons-outlined">
          search
        </span>
      </div>
      <div class="header-right">
        <span class="material-icons-outlined">
          notifications
        </span>
        <span class="material-icons-outlined">
          email
        </span>
        <span class="material-icons-outlined">
          account_circle
        </span>
      </div>
    </header>
    <!-- End Header -->

    <!-- Sidebar -->
    <aside id="sidebar">
      <div class="sidebar-title">
        <div class="sidebar-brand">
          <span class="material-icons-outlined">
            inventory
          </span> 
          Bob's Inventory
          </div>
          <span id="aside-close" class="material-icons-outlined">close</span>
      </div>

      <ul class="sidebar-list">
        <li class="sidebar-list-item">
          <span class="material-icons-outlined">
            dashboard
          </span> 
          Dashboard
        </li>
        <li class="sidebar-list-item">
          <span class="material-icons-outlined">
            inventory_2
          </span> 
          Products
        </li>
        <li class="sidebar-list-item">
          <span class="material-icons-outlined">
            fact_check
          </span> 
          Inventory
        </li>
        <li class="sidebar-list-item">
          <span class="material-icons-outlined">
            add_shopping_cart
          </span> 
          Purchase Orders
        </li>
        <li class="sidebar-list-item">
          <span class="material-icons-outlined">
            shopping_cart
          </span> 
          Sales Orders
        </li>
        <li class="sidebar-list-item">
          <span class="material-icons-outlined">
            poll
          </span> 
          Reports
        </li>
        <li class="sidebar-list-item">
          <span class="material-icons-outlined">
            settings
          </span> 
          Settings
        </li>
      </ul>
    </aside>
    <!-- End Sidebar -->

    <!-- Main Container -->
    <main class="main-container">
      <div class="main-title">
        <p class="font-weight-bold">DASHBOARD</p>
      </div>

      <div class="main-cards">

        <div class="card">
          <div class="card-inner">
            <p class="text-primary">PRODUCTS</p>
            <span class="material-icons-outlined text-blue">inventory_2</span>
          </div>
          <span class="text-primary font-weight-bold">249</span>
        </div>

        <div class="card">
          <div class="card-inner">
            <p class="text-primary">PURCHASE ORDERS</p>
            <span class="material-icons-outlined text-orange">add_shopping_cart</span>
          </div>
          <span class="text-primary font-weight-bold">83</span>
        </div>

        <div class="card">
          <div class="card-inner">
            <p class="text-primary">SALES ORDERS</p>
            <span class="material-icons-outlined text-green">shopping_cart</span>
          </div>
          <span class="text-primary font-weight-bold">79</span>
        </div>

        <div class="card">
          <div class="card-inner">
            <p class="text-primary">INVENTORY ALERTS</p>
            <span class="material-icons-outlined text-red">notification_important</span>
          </div>
          <span class="text-primary font-weight-bold">56</span>
        </div>
      </div>
      <div class="charts">
        <div class="charts-card">
          <p class="chart-title">Top 5 Products</p>
          <div class="bar-chart">
          </div>
        </div>

        <div class="charts-card">
          <p class="chart-title">Purchase and Sales Orders</p>
          <div class="area-chart">
          </div>
        </div>
      </div>
    </main>
    <!-- End Main Container -->
  </div>
`

let sidebarOpen = false

document.querySelector('.menu-icon').addEventListener('click', () => {
  const sidebar = document.querySelector('#sidebar')

  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive')
    sidebarOpen = true
  } else {
    sidebar.classList.remove('sidebar-responsive')
    sidebarOpen = false
  }
  console.log(sidebar)
})

document.querySelector('#aside-close').addEventListener('click', () => {
  document.querySelector('#sidebar').classList.remove('sidebar-responsive')
  sidebarOpen = false
})

// ------------- CHARTS ------------- //
// BAR CHART

const  barChartOptions = {
  series: [{
    data: [10, 8, 6, 4, 2]
  }],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false
    }
  },
  colors: [
    '#246dec',
    '#cc3c43',
    '#367952',
    '#f5b74f',
    '#4f35a1'
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: ['Laptop', 'Phone', 'Monitor', 'Headphones', 'Cameria'],
  },
  yaxis: {
    title: {
      text: 'Quantity'
    }
  }
}

const barChart = new ApexCharts(document.querySelector('.bar-chart'), barChartOptions)
barChart.render()

// AREA CHART

const areaChartOptions = {
  series: [{
    name: 'Purchase Orders',
    // type: 'area',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'Sales Orders',
    // type: 'line',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
    chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false
    }
  },
  colors: [
    '#4f35a1', 
    '#246dec'
  ],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  labels: ['January', 'February','March','April','May','June','July'],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Purchase Orders',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Sales Orders',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if(typeof y !== "undefined") {
          return  y.toFixed(0) + " points";
        }
        return y;
      }
    }
  }
}

const areaChart = new ApexCharts(document.querySelector(".area-chart"), areaChartOptions)
areaChart.render()