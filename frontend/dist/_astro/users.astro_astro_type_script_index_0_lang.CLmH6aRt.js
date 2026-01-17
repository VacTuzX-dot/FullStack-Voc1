import{S as n}from"./sweetalert2.esm.all.BbQndx0i.js";const o=localStorage.getItem("token");o||(window.location.href="/signin");async function a(){const e=document.getElementById("loadingState"),s=document.getElementById("usersTable"),d=document.getElementById("errorState"),r=document.getElementById("usersTableBody");try{const i=await fetch("https://backend-nextjs-virid.vercel.app/api/users",{headers:{Authorization:`Bearer ${o}`}});if(!i.ok)throw new Error("Failed to fetch");const c=await i.json();r&&(r.innerHTML=c.map(t=>`
          <tr>
            <td>${t.id}</td>
            <td>${t.username}</td>
            <td>${t.email}</td>
            <td>
              <button class="btn btn-sm btn-outline-primary me-1" onclick="editUser(${t.id})">
                <i class="bi bi-pencil"></i>
              </button>
              <button class="btn btn-sm btn-outline-danger" onclick="deleteUser(${t.id})">
                <i class="bi bi-trash"></i>
              </button>
            </td>
          </tr>
        `).join("")),e?.classList.add("d-none"),s?.classList.remove("d-none")}catch{e?.classList.add("d-none"),d?.classList.remove("d-none")}}a();window.editUser=e=>{n.fire({title:"Edit User",text:`Edit user ID: ${e}`,icon:"info"})};window.deleteUser=async e=>{if((await n.fire({title:"Delete User?",text:"This action cannot be undone.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",confirmButtonText:"Yes, delete it!"})).isConfirmed)try{await fetch(`https://backend-nextjs-virid.vercel.app/api/users/${e}`,{method:"DELETE",headers:{Authorization:`Bearer ${o}`}}),n.fire("Deleted!","User has been deleted.","success"),a()}catch{n.fire("Error!","Failed to delete user.","error")}};
