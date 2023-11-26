const authorisedRoles = [
    "admin",
    "editor",
    "producer",
    "viewer"
]

const checkAccess = (userRole) => {
  if (
    authorisedRoles.includes(userRole)
  ) {
    console.log("✅ Access Granted");
  } else {
    console.log("❌ Access Denied");
  }
};

checkAccess("admin");
