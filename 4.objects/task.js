function Student(name, gender, age) {
    this.name=name;
    this.gender=gender;
    this.age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject=subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks===undefined){
    this.marks=[mark];
  }
  else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function(...mark) {
  if(this.marks===undefined){
    this.marks=[...mark];
  } else {
    this.marks.push(...mark);
  }
}

Student.prototype.getAverage = function() {
  let sum = 0;
  this.marks.forEach((mark) => {sum += parseInt(mark)});
  return sum / this.marks.length;
}

Student.prototype.exclude = function(reason) {
  delete subject;
  delete this.marks;
  this.excluded = reason;
}