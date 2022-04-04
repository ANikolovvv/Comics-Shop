const baseUrl="http://localhost:3030";
const PAGE_SIZE = 5;

async function regUsers(option) {
  const url = `http://localhost:3030/users/register`;
  const res = await fetch(url, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(option),
  });
  try {
    if (res.ok) {
      const user = await res.json();
      localStorage.setItem("user", JSON.stringify(user));
   
    } else {
      const ress = await res.json();
      throw new Error(ress);
    }
  } catch (err) {
    console.log(err.message);
  }
  return res;
}
async function resLogout(token) {
  const res = await fetch(`http://localhost:3030/users/logout`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": token,
    },
  });
  try {
      if(res.status===403){
        localStorage.clear();
        throw new Error()
      }

  } catch (error) {
    console.log(error.message);
  }

  localStorage.clear();
  return res;
}

async function onLogin(data) {
  const u = `http://localhost:3030/users/login`;

  const res = await fetch(u, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  try {
    if (res.status===403) {
      const reds = await res.json();
      throw new Error(reds);
    }

    const user = await res.json();
    localStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    console.log(error.message);
  }

  return res;
}
async function getAll() {
  const response = await fetch(`http://localhost:3030/data/comics`);

  return await response.json();
}




async function getMyData(userId) {
  const response = await fetch(`http://localhost:3030/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);

  return response.json();
}
async function getData(id) {
  const response = await fetch(`http://localhost:3030/data/comics/${id}`);

  return response.json();
}






async function logoutRequest() {
  const response = await fetch(`http://localhost:3030/users/logout`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": sessionStorage.getItem("accessToken"),
    },
  });
}

async function getMyPages(search, page) {
  let url="http://localhost:3030/data/comics";
  let query = [];

  if (search) {
    let searchQuery = "where=" + encodeURIComponent(`title LIKE "${search}"`);

    query.push(searchQuery);
  }

  if (page) {
    query.push(`offset=${(page - 1) * PAGE_SIZE}`);
    query.push(`pageSize=${PAGE_SIZE}`);
  }
  console.log(PAGE_SIZE);
  let querystring = query.length ? `?${query.join("&")}` : "";
  const res = await fetch(url + querystring);
  return await res.json();
}
export {
  regUsers,
  resLogout,
  onLogin,
  getAll,
  getMyData,
  logoutRequest,
  getData,
  getMyPages
  
};
