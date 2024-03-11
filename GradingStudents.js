function gradingStudents(grades) {
    for(let i = 0; i < grades.length; i ++){
        if(grades[i] >= 38){
            if(grades[i] % 5 == 3){
                grades[i] += 2;
            }
            else if(grades[i] % 5 == 4){
                grades[i] ++;
            }
        }
    }
    return grades;
}