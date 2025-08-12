// Employees with tasks

const Employees = [
  {
    id: "emp001",
    name: "David Lee",
    email: "john.doe@example.com",
    password: "123",
    taskcount:{
      active:4,
      complete:2,
      fail:1,
      newtask:1 
    },
    tasks: [
      {
        title: "Prepare report",
        description: "Prepare report task for upcoming project",
        category: "Finance",
        date: "2025-08-05",
        status: true,
        active: false,
        newTask: false,
        completed: true,
        failTask: false
      },
      {
        title: "Fix bugs",
        description: "Fix bugs task for upcoming project",
        category: "Development",
        date: "2025-08-06",
        status: false,
        active: true,
        newTask: true,
        completeTask: false,
        failTask: false
      },
      {
        title: "Write documentation",
        description: "Write documentation task for upcoming project",
        category: "IT",
        date: "2025-08-03",
        status: false,
        active: false,
        newTask: false,
        completeTask: false,
        failTask: true
      }
    ]
  },
  {
    id: "emp002",
    name: "Lisa Kim",
    email: "jane.smith@example.com",
    password: "123",
    taskcount:{
      active:0,
      complete:0,
      fail:0,
      newtask:0 
    },
    tasks: [
      {
        title: "Team Feedback",
        description: "Team Feedback task for upcoming project",
        category: "HR",
        date: "2025-08-08",
        status: true,
        active: false,
        newTask: false,
        completeTask: true,
        failTask: false
      },
      {
        title: "Optimize database",
        description: "Optimize database task for upcoming project",
        category: "IT",
        date: "2025-08-06",
        status: false,
        active: true,
        newTask: true,
        completeTask: false,
        failTask: false
      },
      {
        title: "Client Presentation",
        description: "Client Presentation task for upcoming project",
        category: "Sales",
        date: "2025-08-04",
        status: false,
        active: false,
        newTask: false,
        completeTask: false,
        failTask: true
      },
      {
        title: "Update CRM",
        description: "Update CRM task for upcoming project",
        category: "Admin",
        date: "2025-08-07",
        status: true,
        active: false,
        newTask: false,
        completeTask: true,
        failTask: false
      }
    ]
  },
  {
    id: "emp003",
    name: "Michael Jordan",
    email: "michael.jordan@example.com",
    password: "123",
    taskcount:{
      active:10,
      complete:3,
      fail:0,
      newtask:0 
    },
    tasks: [
      {
        title: "Draft copy",
        description: "Draft copy task for upcoming project",
        category: "Marketing",
        date: "2025-08-05",
        status: true,
        active: true,
        newTask: false,
        completeTask: true,
        failTask: false
      },
      {
        title: "Fix bugs",
        description: "Fix bugs task for upcoming project",
        category: "Development",
        date: "2025-08-03",
        status: false,
        active: false,
        newTask: false,
        completeTask: false,
        failTask: true
      },
      {
        title: "Prepare report",
        description: "Prepare report task for upcoming project",
        category: "Finance",
        date: "2025-08-02",
        status: false,
        active: true,
        newTask: true,
        completeTask: false,
        failTask: false
      },
      {
        title: "Team Meeting",
        description: "Team Meeting task for upcoming project",
        category: "Management",
        date: "2025-08-09",
        status: false,
        active: false,
        newTask: false,
        completeTask: false,
        failTask: true
      }
    ]
  },
  {
    id: "emp004",
    name: "Jane Smith",
    email: "lisa.kim@example.com",
    password: "123",
    taskcount:{
      active:2,
      complete:1,
      fail:1,
      newtask:1 
    },
    tasks: [
      {
        title: "Design new logo",
        description: "Design new logo task for upcoming project",
        category: "Design",
        date: "2025-08-01",
        status: true,
        active: false,
        newTask: false,
        completeTask: true,
        failTask: false
      },
      {
        title: "Update CRM",
        description: "Update CRM task for upcoming project",
        category: "Admin",
        date: "2025-08-05",
        status: false,
        active: true,
        newTask: true,
        completeTask: false,
        failTask: false
      },
      {
        title: "Fix bugs",
        description: "Fix bugs task for upcoming project",
        category: "Development",
        date: "2025-08-02",
        status: false,
        active: false,
        newTask: false,
        completeTask: false,
        failTask: true
      }
    ]
  },
  {
    id: "emp005",
    name: "John Doe",
    email: "david.lee@example.com",
    password: "123",
    taskcount:{
      active:2,
      complete:1,
      fail:1,
      newtask:1 
    },
    tasks: [
      {
        title: "Optimize database",
        description: "Optimize database task for upcoming project",
        category: "IT",
        date: "2025-08-09",
        status: true,
        active: false,
        newTask: false,
        completeTask: true,
        failTask: false
      },
      {
        title: "Client Presentation",
        description: "Client Presentation task for upcoming project",
        category: "Sales",
        date: "2025-08-07",
        status: false,
        active: true,
        newTask: true,
        completeTask: false,
        failTask: false
      },
      {
        title: "Write documentation",
        description: "Write documentation task for upcoming project",
        category: "IT",
        date: "2025-08-04",
        status: false,
        active: false,
        newTask: false,
        completeTask: false,
        failTask: true
      },
      {
        title: "Team Meeting",
        description: "Team Meeting task for upcoming project",
        category: "Management",
        date: "2025-08-06",
        status: true,
        active: false,
        newTask: false,
        completeTask: true,
        failTask: false
      }
    ]
  }
];

// Admin
const Admin = [
  {
    id: "admin001",
    name:'Abhishek',
    email: "admin@example.com",
    password: "123"
  }
];

// Save employees and admin to local storage
export const SetLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(Employees));
  localStorage.setItem("admin",JSON.stringify(Admin))
  
};

// Get data from local storage
export const getLocalStorage = () => {
const EmployeesData=JSON.parse( localStorage.getItem("employees"))
const AdminData=JSON.parse(localStorage.getItem("admin"))
    return { Employees, Admin};                  
}
