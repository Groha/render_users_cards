const ROLES = {
   admin: `https://www.flaticon.com/svg/static/icons/svg/1424/1424453.svg`,
   student: `https://www.flaticon.com/svg/static/icons/svg/1424/1424424.svg`,
   lector: `https://www.flaticon.com/svg/static/icons/svg/1424/1424450.svg`
}
const GRADATION = [
   [0,20],
   [20,55],
   [55,85],
   [85,100]
]
const MARK = {
   20: `satisfactory`,
   55: `good`,
   85: `very good`,
   100: `excellent` 
}
const USERS = [
   {
      name: `Jack Smith`,
      age: 23,
      img: `https://www.flaticon.com/svg/static/icons/svg/2922/2922522.svg`,
      role: `student`,
      courses: [
         {
            title: `Front-end Pro`,
            mark: 20
         },
         {
            title: `Java Enterprise`,
            mark: 100
         }
      ]
   },
   {
      name: `Amal Smith`,
      age: 20,
      img: `https://www.flaticon.com/svg/static/icons/svg/2922/2922656.svg`,
      role: `student`
   },
   {
      name: `Noah Smith`,
      age: 43,
      img: `https://www.flaticon.com/svg/static/icons/svg/2922/2922616.svg`,
      role: `student`,
      courses: [
         {
            title: `Front-end Pro`,
            mark: 50
         }
      ]
   },
   {
      name: `Charlie Smith`,
      age: 18,
      img: `https://www.flaticon.com/svg/static/icons/svg/2922/2922688.svg`,
      role: `student`,
      courses: [
         {
            title: `Front-end Pro`,
            mark: 75
         },
         {
            title: `Java Enterprise`,
            mark: 23
         }]
   },
   {
      name: `Emily Smith`,
      age: 30,
      img: `https://www.flaticon.com/svg/static/icons/svg/2922/2922565.svg`,
      role: `admin`,
      courses: [
         {
            title: `Front-end Pro`,
            score: 10,
            lector: `Leo Smith`
         },
         {
            title: `Java Enterprise`,
            score: 50,
            lector: `David Smith`
         },
         {
            title: `QA`,
            score: 75,
            lector: `Emilie Smith`
         }]
   },
   {
      name: `Leo Smith`,
      age: 253,
      img: `https://www.flaticon.com/svg/static/icons/svg/2922/2922719.svg`,
      role: `lector`,
      courses: [
         {
            title: `Front-end Pro`,
            score: 78,
            studentsScore: 79
         },
         {
            title: `Java Enterprise`,
            score: 85,
            studentsScore: 85
         }
      ]
   }
]

class User {
   constructor(name, age, img, role, courses) {
      this.img = img,
      this.name = name,
      this.age = age,
      this.role = role,
      this.courses = courses
   }
   getRender() {
      return `<div class="user__info">
                  <div class="user__info--data">
                     ${this.getImg()}
                     <div class="user__naming">
                        ${this.getName()}
                        ${this.getAge()}
                     </div>
                  </div>
                  ${this.getRole()}
               </div>`
   }

   getImg() {
      return `<img src="${this.img}" alt="${this.name}" height="50">`
   }
   getName() {
      return `<p>Name: <b>${this.name}</b></p>`
   }
   getAge() {
      return `<p>Age: <b>${this.age}</b></p>`
   }
   getRole() {
      return `<div class="user__info--role ${this.role}">
               <img src="${ROLES[this.role]}" alt="${this.role}" height="25">
               <p>${this.role}</p>
            </div>`
   }
}

class Student extends User {
   constructor(name, age, img, role, courses) {
      super(name, age, img, role, courses)
   }

   getRender() {
      return `<div class="user">${super.getRender()}<div class="user__courses">${this.getCourses()}</div></div>`
   }

   getCourses() {
      let renderCourses = ``
      if (this.courses !== undefined) {
         let courses = [...this.courses]
         courses.map(item => {
            let markName
            for (let key in MARK) {
               if (item.mark <= key) {
                  markName = MARK[key]
                  break
               }
            }
            renderCourses += `<p class="user__courses--course ${this.role}">
                                 ${item.title} <span class="${markName}">${markName}</span>
                              </p>`
         })
      }
      return renderCourses
   }
   
}

class Lector extends User {
   constructor(name, age, img, role, courses) {
      super(name, age, img, role, courses)
   }

   getRender() {
      return `<div class="user">${super.getRender()}<div class="user__courses admin--info">${this.getCourses()}</div></div>`
   }

   getCourses() {
      let renderCourses = ``
      if (this.courses !== undefined) {
         let courses = [...this.courses]
         courses.map(item => {
            let scoreName
            for (let key in MARK) {
               if (item.score <= key) {
                  scoreName = MARK[key]
                  break
               }
            }
            let studentsScoreName
            for (let key in MARK) {
               if (item.studentsScore <= key) {
                  studentsScoreName = MARK[key]
                  break
               }
            }
            renderCourses += `<div class="user__courses--course ${this.role}">
                                 <p>Title: <b>${item.title}</b></p>
                                 <p>Lector's score: <span class="${scoreName}">${scoreName}</span></p>
                                 <p>Average student's score: <span class="${studentsScoreName}">${studentsScoreName}</span></p>
                              </div>`
         })
      }
      return renderCourses
   }
}

class Admin extends User {
   constructor(name, age, img, role, courses) {
      super(name, age, img, role, courses)
   }

   getRender() {
      return `<div class="user">${super.getRender()}<div class="user__courses admin--info">${this.getCourses()}</div></div>`
   }

   getCourses() {
      let renderCourses = ``
      if (this.courses !== undefined) {
         let courses = [...this.courses]
         courses.map(item => {
            let scoreName
            for (let key in MARK) {
               if (item.score <= key) {
                  scoreName = MARK[key]
                  break
               }
            }
            renderCourses += `<div class="user__courses--course ${this.role}">
                                 <p>Title: <b>${item.title}</b></p>
                                 <p>Admin's score: <span class="${scoreName}">${scoreName}</span></p>
                                 <p>Lector: <b>${item.lector}</b></p>
                              </div>`
         })
      }
      return renderCourses
   }
}
let finalRender = ``
USERS.map(item => {
   let user
   switch(item.role) {
      case `student`: user = new Student(item.name, item.age, item.img, item.role, item.courses);
      finalRender += user.getRender()
      break;
      case `admin`: user = new Admin(item.name, item.age, item.img, item.role, item.courses);
      finalRender += user.getRender()
      break;
      case `lector`: user = new Lector(item.name, item.age, item.img, item.role, item.courses);
      finalRender += user.getRender()
      break;
   }
})
console.log(finalRender)

document.write(`<div class="users">${finalRender}</div>`)