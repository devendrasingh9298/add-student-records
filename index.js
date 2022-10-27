let SerialNo = 1;
function insertItem(){
    const srollno = document.getElementById("rollno").value;
    const sname = document.getElementById("name").value;
    const scourse = document.getElementById("course").value;
    const saddress = document.getElementById("address").value;
    const smobileno = document.getElementById("mobileno").value;

    const tr = document.createElement('tr');
    const tdSerialNO = document.createElement('td');
    const  tdrollno =document.createElement('td');
    const  tdname =document.createElement('td');
    const  tdcourse =document.createElement('td');
    const  tdaddress =document.createElement('td');
    const  tdmobileno =document.createElement('td');




    tdSerialNO.innerText = SerialNo;
    tdrollno.innerText = srollno;
    tdname.innerText = sname;
    tdcourse.innerText = scourse;
    tdaddress.innerText = saddress;
    tdmobileno.innerText = smobileno;
    SerialNo++;

    tr.appendChild(tdSerialNO);
    tr.appendChild(tdrollno);
    tr.appendChild(tdname);
    tr.appendChild(tdcourse);
    tr.appendChild(tdaddress);
    tr.appendChild(tdmobileno);


    document.getElementById("tbody").appendChild(tr);

    document.getElementById('rollno').value = " ";
    document.getElementById('name').value = " ";
    document.getElementById('course').value = " ";
    document.getElementById('address').value = " ";
    document.getElementById('mobileno').value = " ";
}