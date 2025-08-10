// Employees with tasks
const Employees = [
  {
    id: "emp001",
    email: "john.doe@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare report",
        description: "Prepare report task for upcoming project",
        category: "Finance",
        date: "2025-08-05T10:00:00Z",
        status: true,
        active: false,
        newTask: false,
        completeTask: true,
        failTask: false
      },
      {
        title: "Fix bugs",
        description: "Fix bugs task for upcoming project",
        category: "Development",
        date: "2025-08-06T14:00:00Z",
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
        date: "2025-08-03T09:00:00Z",
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
    email: "jane.smith@example.com",
    password: "123",
    tasks: [
      {
        title: "Team Feedback",
        description: "Team Feedback task for upcoming project",
        category: "HR",
        date: "2025-08-08T11:30:00Z",
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
        date: "2025-08-06T13:00:00Z",
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
        date: "2025-08-04T15:00:00Z",
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
        date: "2025-08-07T10:45:00Z",
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
    email: "michael.jordan@example.com",
    password: "123",
    tasks: [
      {
        title: "Draft copy",
        description: "Draft copy task for upcoming project",
        category: "Marketing",
        date: "2025-08-05T08:15:00Z",
        status: true,
        active: false,
        newTask: false,
        completeTask: true,
        failTask: false
      },
      {
        title: "Fix bugs",
        description: "Fix bugs task for upcoming project",
        category: "Development",
        date: "2025-08-03T17:00:00Z",
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
        date: "2025-08-02T09:30:00Z",
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
        date: "2025-08-09T12:00:00Z",
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
    email: "lisa.kim@example.com",
    password: "123",
    tasks: [
      {
        title: "Design new logo",
        description: "Design new logo task for upcoming project",
        category: "Design",
        date: "2025-08-01T10:00:00Z",
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
        date: "2025-08-05T14:00:00Z",
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
        date: "2025-08-02T09:00:00Z",
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
    email: "david.lee@example.com",
    password: "123",
    tasks: [
      {
        title: "Optimize database",
        description: "Optimize database task for upcoming project",
        category: "IT",
        date: "2025-08-09T11:00:00Z",
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
        date: "2025-08-07T16:30:00Z",
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
        date: "2025-08-04T10:15:00Z",
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
        date: "2025-08-06T09:45:00Z",
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
    email: "admin@example.com",
    password: "123"
  }
];

// Save employees and admin to local storage
export const SetLocalStorage = () => {
  localStorage.setItem("Employees", JSON.stringify(Employees));
  localStorage.setItem("Admin",JSON.stringify(Admin))
  
};

// Get data from local storage
export const getLocalStorage = () => {
const EmployeesData=JSON.parse( localStorage.getItem("Employees"))
const AdminData=JSON.parse(localStorage.getItem("Admin"))
console.log(EmployeesData);
console.log(AdminData)
};
