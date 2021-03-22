function Student(name,age,address,phone,birtday){
    this.name = name;
    this.age = age;
    this.address = address;
    this.phone = phone;
    this.birtday = birtday;
    this.subjects = function(name,teacher,point,year){
        this.name = name;
        this.teacher = teacher;
        this.point = point;
        this.year = year;
    }



}

function StudentPoLy(id,name,email,avatar,phone,birthday,address,study_major,avgscore){
    Student.call(this,name,age,address,phone,birthday)
    this.id = id;
    this.email = email;
    this.avatar = avatar;
    this.phone = phone;
    this.study_major = study_major;
    this.avgscore = avgscore;

}