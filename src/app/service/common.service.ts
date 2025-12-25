import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  getSideBarConfig() {
    const list = [
      {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'bx bx-home-alt icon',
      },
    ];
    return list;
  }

  recentActivity() {
    const list = [
      {
        description: 'Ajith Doe applied for leave',
        time: '10 mins ago',
        icon: 'bx bx-calendar-minus',
        color: '#ff7675',
      },
      {
        description: 'New policy updated',
        time: '2 hours ago',
        icon: 'bx bx-file',
        color: '#695CFE',
      },
      {
        description: 'Salary processed for March',
        time: '1 day ago',
        icon: 'bx bx-wallet',
        color: '#00b894',
      },
      {
        description: 'Team meeting at 3 PM',
        time: '5 hours ago',
        icon: 'bx bx-group',
        color: '#0984e3',
      },
    ];
    return list;
  }

  chartOptions() {
    const chartoptions = {
      series: [
        {
          name: 'Performance A',
          data: [65, 58, 78, 80, 55, 54, 40],
        },
        {
          name: 'Performance B',
          data: [28, 48, 40, 18, 85, 26, 90],
        },
      ],

      chart: {
        type: 'bar',
        height: 350,
        toolbar: { show: false },
      },

      colors: ['#6C63FF', '#E6EBF8'],

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '45%',
          borderRadius: 6,
        },
      },

      dataLabels: {
        enabled: false,
      },

      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: { show: false },
        axisTicks: { show: false },
      },

      yaxis: {
        max: 90,
        tickAmount: 5,
      },

      legend: {
        position: 'top',
        horizontalAlign: 'center',
        markers: {
          radius: 12,
        },
      },

      grid: {
        strokeDashArray: 4,
        borderColor: '#e0e0e0',
      },
    };

    return chartoptions;
  }

  getCardConfig() {
    const statCards = [
      {
        title: 'Total Employees',
        value: '150',
        icon: 'bx bx-user',
        color: '#695CFE',
      },
      {
        title: 'On Leave',
        value: '12',
        icon: 'bx bx-calendar-minus',
        color: '#ffbb55',
      },
      {
        title: 'New Joins',
        value: '5',
        icon: 'bx bx-user-plus',
        color: '#00b894',
      },
      {
        title: 'Attrition',
        value: '2%',
        icon: 'bx bx-trending-down',
        color: '#ff7675',
      },
    ];

    return statCards;
  }

  getTableDesign() {
    const tableDesign = [
      {
        name: 'Ajith',
        department: 'Engineering',
        status: 'Active',
        joinDate: '12 Jan 2023',
      },
      {
        name: 'Kishore',
        department: 'HR',
        status: 'On Leave',
        joinDate: '15 Feb 2023',
      },
      {
        name: 'Arun',
        department: 'Design',
        status: 'Active',
        joinDate: '10 Mar 2023',
      },
      {
        name: 'Ramesh',
        department: 'Marketing',
        status: 'Remote',
        joinDate: '05 Apr 2023',
      },
      {
        name: 'Manoj',
        department: 'Engineering',
        status: 'Resigned',
        joinDate: '20 May 2021',
      },
    ];
    return tableDesign;
  }
}


