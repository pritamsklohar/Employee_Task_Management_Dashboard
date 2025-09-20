
const employees = [
  {
    "id": 1,
    "name": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare Sales Report",
        "description": "Compile sales data for Q1.",
        "date": "2025-09-22",
        "category": "Reporting",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Client Follow-up",
        "description": "Call clients who missed last meeting.",
        "date": "2025-09-25",
        "category": "Communication",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update CRM",
        "description": "Enter new lead details in CRM system.",
        "date": "2025-09-28",
        "category": "Data Entry",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "name": "Priya",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Design Landing Page",
        "description": "Create mockup for product launch.",
        "date": "2025-09-23",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix UI Bugs",
        "description": "Resolve issues reported in testing.",
        "date": "2025-09-24",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Team Sync Meeting",
        "description": "Weekly stand-up with design team.",
        "date": "2025-09-26",
        "category": "Meeting",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Logo Variations",
        "description": "Prepare 3 new logo concepts.",
        "date": "2025-09-30",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 3,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "name": "Rohan",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Database Backup",
        "description": "Run and verify weekly backup.",
        "date": "2025-09-21",
        "category": "IT",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "API Documentation",
        "description": "Update docs for v2 endpoints.",
        "date": "2025-09-23",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Security Patch",
        "description": "Apply latest security updates.",
        "date": "2025-09-24",
        "category": "IT",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "name": "Neha",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Write Blog Post",
        "description": "Draft post about new product features.",
        "date": "2025-09-22",
        "category": "Content",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Schedule Social Media",
        "description": "Plan tweets for the next 2 weeks.",
        "date": "2025-09-23",
        "category": "Marketing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Newsletter Draft",
        "description": "Create draft for monthly email newsletter.",
        "date": "2025-09-25",
        "category": "Content",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Ad Campaign",
        "description": "Set up Google Ads for promotion.",
        "date": "2025-09-28",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 3,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "name": "Ishita",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Customer Support Tickets",
        "description": "Respond to open customer tickets.",
        "date": "2025-09-20",
        "category": "Support",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Training Session",
        "description": "Host training for new hires.",
        "date": "2025-09-22",
        "category": "HR",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Policy Review",
        "description": "Review company leave policy.",
        "date": "2025-09-23",
        "category": "HR",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Budget Report",
        "description": "Prepare expense summary for September.",
        "date": "2025-09-27",
        "category": "Finance",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Interview Scheduling",
        "description": "Schedule interviews for developer role.",
        "date": "2025-09-29",
        "category": "HR",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 4,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  }
]

const admin = [
  {
    "id": 1,
    "name": "Arjun",
    "email": "admin@example.com",
    "password": "123"
  }
]



export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))

}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    return{employees, admin}
}
