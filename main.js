function loadInputs() {
    // Transformerless?
    if (document.getElementById("transformerlessInput").checked.toString() != localStorage.getItem("transformerless"))
    {
        document.getElementById("transformerlessInput").click();
    }
    hideInputs(document.getElementById("transformerlessInput").checked);
    
    // Date
    document.getElementById("dateInput").value = calc_date();
    
    // Basic Info
    document.getElementById("jobNumberInput").value = localStorage.getItem("jobNumber");
    document.getElementById("customerNameInput").value = localStorage.getItem("customerName");
    document.getElementById("descriptionInput").value = localStorage.getItem("description");
    
    // Furnace Info
    document.getElementById("powerInput").value = localStorage.getItem("power");
    document.getElementById("voltageRedLineInput").value = localStorage.getItem("voltageRedLine");
    document.getElementById("primaryIMaxInput").value = localStorage.getItem("primaryIMax");
    document.getElementById("primaryUFDInput").value = localStorage.getItem("primaryUFD");
    document.getElementById("secondaryUFDInput").value = localStorage.getItem("secondaryUFD");
    document.getElementById("xFormerRatioInput").value = localStorage.getItem("xFormerRatio");
    document.getElementById("frequencyInput").value = localStorage.getItem("frequency");
    document.getElementById("totLimitInput").value = localStorage.getItem("totLimit");
    
    // Halfbridge or Fullbridge?
    document.getElementById("bridgeTypeInput").value = localStorage.getItem("bridgeType");
    
    // Load Data
    document.getElementById("permeabilityInput").value = localStorage.getItem("permeability");
    document.getElementById("resistivityInput").value = localStorage.getItem("resistivity");
    document.getElementById("loadLengthInput").value = localStorage.getItem("loadLength");
    document.getElementById("loadDiamInput").value = localStorage.getItem("loadDiam");
    
    // Coil Data
    document.getElementById("b&lInput").value = localStorage.getItem("b&l");
    document.getElementById("coilLengthInput").value = localStorage.getItem("coilLength");
    document.getElementById("coilDiamInput").value = localStorage.getItem("coilDiam");
    
    // Furnace Type
    document.getElementById("furnaceTypeInput").value = localStorage.getItem("furnaceType");
    
    // Line Voltage
    document.getElementById("lineVoltageInput").value = localStorage.getItem("lineVoltage");
    
//    document.getElementById("Input").value = localStorage.getItem("");
}


function clearSavedConfigurations() {
    localStorage.setItem("savedConfigurations", "[]");
    updateModalSavesList();
}


function saveToLocalStorage(id, value) {
    if (value != "on") {
        localStorage.setItem(id.slice(0, -5), value);
    }
    else {
        localStorage.setItem(id.slice(0, -5), document.getElementById(id).checked);
    }
}


function saveConfiguration() {
    let saveName = prompt("Enter a name for the configuration:");
    if (saveName == null) {
        return;
    }
    while(!checkSaveIDs(saveName)) {
        saveName = prompt("A configuration with that name already exists.                                           Enter another name for the configuration:");
        if (saveName == null) {
            return;
        }
    }
    
    data = {
        id: saveName
    };
    
    // Transformerless?
    data.transformerless = document.getElementById("transformerlessInput").checked
    
    // Date
    data.date = document.getElementById("dateInput").value
    
    // Basic Info
    data.jobNumber = document.getElementById("jobNumberInput").value
    data.customerName = document.getElementById("customerNameInput").value
    data.description = document.getElementById("descriptionInput").value
    
    // Furnace Info
    data.power = document.getElementById("powerInput").value
    data.voltageRedLine = document.getElementById("voltageRedLineInput").value
    data.primaryIMax = document.getElementById("primaryIMaxInput").value
    data.primaryUFD = document.getElementById("primaryUFDInput").value
    data.secondaryUFD = document.getElementById("secondaryUFDInput").value
    data.xFormerRatio = document.getElementById("xFormerRatioInput").value
    data.frequency = document.getElementById("frequencyInput").value
    data.totLimit = document.getElementById("totLimitInput").value
    
    // Halfbridge or Fullbridge?
    data.bridgeType = document.getElementById("bridgeTypeInput").value
    
    // Load Data
    data.permeability = document.getElementById("permeabilityInput").value
    data.resistivity = document.getElementById("resistivityInput").value
    data.loadLength = document.getElementById("loadLengthInput").value
    data.loadDiam = document.getElementById("loadDiamInput").value
    
    // Coil Data
    data.b_l = document.getElementById("b&lInput").value
    data.coilLength = document.getElementById("coilLengthInput").value
    data.coilDiam = document.getElementById("coilDiamInput").value
    
    // Furnace Type
    data.furnaceType = document.getElementById("furnaceTypeInput").value
    
    // Line Voltage
    data.lineVoltage = document.getElementById("lineVoltageInput").value
    
    saves_arr.push(data);
    
    saves_string = JSON.stringify(saves_arr);
    
    localStorage.setItem("savedConfigurations", saves_string);
    
}


function deleteConfiguration(id) {
    let save_id = id.slice(0, id.length - 6);
    let saves_arr = JSON.parse(localStorage.getItem("savedConfigurations"));
    for(let i = 0; i < saves_arr.length; i++) {
        if (saves_arr[i].id == save_id) {
            saves_arr = deleteIndex(saves_arr, i);
        }
    }
    localStorage.setItem("savedConfigurations", JSON.stringify(saves_arr));
    document.getElementById(save_id + "Container").remove();
    
    updateModalSavesList();
}


function loadConfiguration() {
    let selected_id = document.getElementsByClassName("list-group-item list-group-item-action active");
    
    if (selected_id == null)
    {
        window.alert("No Configuration has been selected.");
        return;
    }
    else if (selected_id.length == 0)
    {
        window.alert("No Configuration has been selected.");
        return;
    }
    
    selected_id = selected_id[0].children[0].children[0].innerHTML;
    
    let array_str = JSON.parse(localStorage.getItem("savedConfigurations"));
    let data;
    
    for(let i = 0; i < array_str.length; i++) {
        if (array_str[i].id == selected_id) {
            data = array_str[i];
            break;
        }
    }
    
    // Transformerless?
    if (document.getElementById("transformerlessInput").checked.toString() != data.transformerless)
    {
        document.getElementById("transformerlessInput").click();
    }
    hideInputs(document.getElementById("transformerlessInput").checked);
    
    // Date
    document.getElementById("dateInput").value = data.date;
    
    // Basic Info
    document.getElementById("jobNumberInput").value = data.jobNumber;
    document.getElementById("customerNameInput").value = data.customerName;
    document.getElementById("descriptionInput").value = data.description;
    
    // Furnace Info
    document.getElementById("powerInput").value = data.power;
    document.getElementById("voltageRedLineInput").value = data.voltageRedLine;
    document.getElementById("primaryIMaxInput").value = data.primaryIMax;
    document.getElementById("primaryUFDInput").value = data.primaryUFD;
    document.getElementById("secondaryUFDInput").value = data.secondaryUFD;
    document.getElementById("xFormerRatioInput").value = data.xFormerRatio;
    document.getElementById("frequencyInput").value = data.frequency;
    document.getElementById("totLimitInput").value = data.totLimit;
    
    // Halfbridge or Fullbridge?
    document.getElementById("bridgeTypeInput").value = data.bridgeType;
    
    // Load Data
    document.getElementById("permeabilityInput").value = data.permeability;
    document.getElementById("resistivityInput").value = data.resistivity;
    document.getElementById("loadLengthInput").value = data.loadLength;
    document.getElementById("loadDiamInput").value = data.loadDiam;
    
    // Coil Data
    document.getElementById("b&lInput").value = data.b_l;
    document.getElementById("coilLengthInput").value = data.coilLength;
    document.getElementById("coilDiamInput").value = data.coilDiam;
    
    // Furnace Type
    document.getElementById("furnaceTypeInput").value = data.furnaceType;
    
    // Line Voltage
    document.getElementById("lineVoltageInput").value = data.lineVoltage;
    
}


function updateModalSavesList() {
    let div_string;
    saves_arr = JSON.parse(localStorage.getItem("savedConfigurations"));
    
    // Checking if there are no previous configurations saved
    if (saves_arr.length == 0) {
        div_string = "<div style='text-align: center;'>There are no previously saved configurations.</div>"
    }
    else {
        div_string = "<div class='list-group' id='list-tab' role='tablist'>";

        for(let i = 0; i < saves_arr.length; i++) {
            let ins = saves_arr[i].id;
            div_string += "<a class='list-group-item list-group-item-action' data-toggle='list' href='#list-home' role='tab' aria-controls='home' style='padding: 6px;' id=" + ins + "Container><div class='row justify-content-between' style='overflow: hidden;'><div class='col-8' style='padding-top: 6px;'>" + ins + "</div><div class='col-4' style='padding-left: 56px;'><button type='button' class='btn btn-danger' id="  + ins + "Delete onclick='deleteConfiguration(id)'>Delete</button></div></div></a>";
        }

        div_string += "</div>";
    }
    
    document.getElementById("modalBody").innerHTML = div_string;
}


function hideInputs(checked) {
    if (checked) {
        document.getElementById("xFormerRatioContainer").style.display='none';
        document.getElementById("primaryUFDContainer").style.display='none';
    }
    else {
        document.getElementById("xFormerRatioContainer").style.display='table-row';
        document.getElementById("primaryUFDContainer").style.display='table-row';
    }
}


function checkSaveIDs(id) {
    let saves_string = localStorage.getItem("savedConfigurations");
    if (saves_string != null) {
        saves_arr = JSON.parse(saves_string);
    }
    else {
        saves_arr = [];
    }
    
    for(let i = 0; i < saves_arr.length; i++) {
        if (saves_arr[i].id == id) {
            return false;
        }
    }
    return true;
}


function deleteIndex(arr, index) {
    let length = arr.length;
    if (length - 1 == index) {
        arr.pop();
    }
    else if (index == 0) {
        arr.shift();
    }
    else if (index > 0 && index < length - 1) {
        temp = arr[index];
        for(let i = index; i < length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr[length - 1] = temp;
        arr.pop();
    }
    return arr;
}


function k1_k2_calc(val) {
    let ans = 0;
    if (val <= 0.62) {
        let log = Math.log(4/val);
        ans = 2*val/Math.PI * ((log - 0.5) + val*val/8 * (log + 0.125) - Math.pow(val, 4)/64 * (log - 2/3) + 5/1024*Math.pow(val, 6)*(log - 109/120));
    }
    else {
        ans = (Math.sqrt(1+4*val*val) - (0.8483 + 0.01/val/val + 0.001/Math.pow(val, 3)))/2/val;
    }
    return ans;
}


function freq_check(primary_i_max) {
    let f = 0, a8 = 0, a7 = 0, fm = 0;
    f = parseFloat(document.getElementById("frequencyInput").value);

    if (f > 20000 || f < 50) {
        window.alert("*** ILLEGAL FREQUENCY ***");
        return;
    }
    
    if (5001 <= f && f <= 20000) {
        a8 = 0.000015;
        a7 = 0.7;
        fm = 837.7 * primary_i_max / 9600;
    }
    else if (3201 <= f && f < 5001) {
        a8 = 0.000025;
        a7 = 0.68;
        fm = 837.7 * primary_i_max / 5000;
    }
    else if (1201 <= f && f < 3201) {
        a8 = 0.00004;
        a7 = 0.66;
        fm = 837.7 * primary_i_max / 3000;
    }
    else if (701 <= f && f < 1201) {
        a8 = 0.00008;
        a7 = 0.63;
        fm = 837.7 * primary_i_max / 1100;
    }
    else if (301 <= f && f < 701) {
        a8 = 0.00011;
        a7 = 0.59;
        fm = 837.7 * primary_i_max / 650;
    }
    else if (151 <= f && f < 301) {
        a8 = 0.00025;
        a7 = 0.57;
        fm = 837.7 * primary_i_max / 275;
    }
    else if (91 <= f && f < 151) {
        a8 = 0.0005;
        a7 = 0.55;
        fm = 837.7 * primary_i_max / 140;
    }
    else if (50 <= f && f < 91) {
        a8 = 0.00117;
        a7 = 0.55;
        fm = 837.7 * primary_i_max / 140;
    }
    return [f, a8, a7, fm];
    
}


function transformerless_check() {
    return document.getElementById("transformerlessInput").checked;
}


function fnx(x) {
    let val = Math.atan(x/Math.sqrt(-x*x+1));
    val = -1*val + 1.5708;
    val = val*(180/Math.PI);
    return val;
}
    

function calc_date() {
    date = new Date();
    day = date.getDate().toString();
    month = (date.getMonth() + 1).toString();
    if (day.length < 2) {
        day = "0" + day;
    }
    if (month.length < 2) {
        month = "0" + month;
    }
    return date.getFullYear() + "-" + month + "-" + day;
}


function program() {

    // Declaring variables
    let rd = 0.01745329;
    let dim = 26;

    let transformerless = transformerless_check();

    let date = calc_date();

    // User inputs
    let job_number = document.getElementById("jobNumberInput").value;
    let customer_name = document.getElementById("customerNameInput").value;
    let description = document.getElementById("descriptionInput").value;
    let power = parseFloat(document.getElementById("powerInput").value);
    let voltage_red_line = parseFloat(document.getElementById("voltageRedLineInput").value);
    let primary_i_max = parseFloat(document.getElementById("primaryIMaxInput").value);
    
    let m2 = 0, primary_ufd;
    if (!transformerless) {
        primary_ufd = parseFloat(document.getElementById("primaryUFDInput").value);
        m2 = primary_ufd*0.000001;
    }

    let secondary_ufd = parseFloat(document.getElementById("secondaryUFDInput").value);
    
    let x_former_ratio;
    if (!transformerless) {
        x_former_ratio = parseFloat(document.getElementById("xFormerRatioInput").value);
        m2 = primary_ufd*0.000001;
    }
    else {
        x_former_ratio = 1;
        m2 = Math.pow(10, 20);
    }
    
    let temp = freq_check(primary_i_max);
    let frequency = temp[0];
    let a8 = temp[1];
    let a7 = temp[2];
    let fm = temp[3];

    temp = a8;
    a8 = parseFloat(document.getElementById("totLimitInput").value)*0.000001;
    if (a8 == 0) {
        a8 = temp;
    }

    let wb = document.getElementById("bridgeTypeInput").value;

    let coil_dia = parseFloat(document.getElementById("coilDiamInput").value);   
    let coil_length = parseFloat(document.getElementById("coilLengthInput").value);   
    let load_dia = parseFloat(document.getElementById("loadDiamInput").value);   
    let load_length = parseFloat(document.getElementById("loadLengthInput").value);   
    
    if (load_length < coil_length) {
        window.alert("Error. Load is larger than coil. Load Length >= Coil Length.");
        return;
    }
    if (load_dia > coil_dia) {
        window.alert("Error. Load is shorter than coil. Coil Dia. >= Load Dia.");
        return;
    }

    resistivity = parseFloat(document.getElementById("resistivityInput").value);                    // R
    permeability = parseFloat(document.getElementById("permeabilityInput").value);                  // MU
    b_l = parseFloat(document.getElementById("b&lInput").value);                                  // Q

    furnace_type = document.getElementById("furnaceTypeInput").value;
    let im = 1;
    if (furnace_type == "Steel Shell") {
        im = 1.15;
    }
    
    line_voltage = parseFloat(document.getElementById("lineVoltageInput").value);                   // L0
    
    let l9;
    if (wb == "Fullbridge") {
        l9 = line_voltage / 1;
    }
        
    else if (wb == "Halfbridge") {
        l9 = line_voltage / 2;
    }

    let iv = 560*l9/460;

    let u6 = load_length / load_dia;
    let u7 = coil_length / coil_dia;

    let k1 = k1_k2_calc(u7);
    let k2 = k1_k2_calc(u6);

    let w6 = coil_dia*coil_dia + coil_length*coil_length;
    let w7 = load_dia*load_dia + load_length*load_length;

    let w3 = load_dia*load_dia / w7;
    let w4 = coil_dia*coil_dia / w6;
    let w5 = w7 / w6;

    let u1 = 1 - w3*7/4;
    let u2 = 1 - w3*9/2 + w3*w3*33/8;
    let u3 = 1 - w3*33/4 + w3*w3*143/8 - Math.pow(w3, 3)*715/64;
    let u4 = 1 - w3*13 + w3*w3*195/4 - Math.pow(w3, 3)*1105/16 + Math.pow(w3, 4)*4199/128;
    let u5 = 1 - w3*75/4 + w3*w3*425/4 - Math.pow(w3, 3)*8075/32 + Math.pow(w3, 4)*33915/128 - Math.pow(w3, 5)*52003/512;

    let z1 = 1 - w4*7/4;
    let z2 = 1 - w4 * 9 / 2 + w4 * w4 * 33 / 8;
    let z3 = 1 - w4 * 33 / 4 + w4 * w4 * 143 / 8 - Math.pow(w4, 3) * 715 / 64;
    let z4 = 1 - w4 * 13 + w4 * w4 * 195 / 4 - Math.pow(w4, 3) * 1105 / 16 + Math.pow(w4, 4) * 4199 / 128;

    let z6 = u1 + u2*z1*w5 + u3*z2*w5*w5 + u4*z3*Math.pow(w5, 3) + u5*z4*Math.pow(w5, 4);

    let z7 = 1 - coil_dia*coil_dia*w7/2/w6/w6*z6;

    let c2 = coil_length*coil_length*z7*z7/(k1*k2*w6);

    let k6 = Math.sqrt(coil_length*coil_length*z7*z7/w6);

    let s = 25.07*coil_dia/coil_length*k1;

    let f1 = (Math.pow(load_dia, 2) / Math.pow(coil_dia, 2)) * (load_length/coil_length) * c2;

    let p2 = 1.98*Math.sqrt(resistivity / (permeability*frequency*Math.sqrt(c2)));

    let f2 = p2 / (load_dia/2);

    if (f2 < 0.3) {
        f2 = f2*permeability;
    }
    else {
        f2 = f2*(1 + Math.pow(p2 / load_dia, 2));
        if (f2 > 1) {
            window.alert("Exceeds FR/FX CALC");
            return;
        }
        else {
            f2 = f2 * permeability;
        }
    }

    let f3 = f2*(1 - (p2/load_dia) + Math.pow(p2/load_dia, 2));

    let p3 = 1.98*Math.sqrt(1.9/(frequency*Math.sqrt(c2)));
    let p4 = p3 / (coil_dia/2);

    let b1 = (1+p4-f1*(1-f2))*b_l;

    let f4 = 0.005*(b1 / b_l);
    let f5 = 1.5*p4*(1+p4);

    let a = f4 + f5 + f1*f3;
    let e1 = f1*f3/a;
    let a2 = a*a;
    let b2 = b1*b1;
    let c4 = a2 + b2;
    let c5 = Math.sqrt(c4);
    let b3 = b1/c4;
    let a3 = a/c4;
    let p5 = a/c5;
    let p6 = fnx(p5);
    let c6 = power*b1/a;
    let v1 = 1 / Math.sqrt(a3*159200 / (power*frequency*s*coil_dia*im));
    let n = voltage_red_line*1.1/v1;

    //#endregion

    let n2 = Array(dim);
    let v2 = Array(dim*2);
    let m1 = Array(dim);
    let i1 = Array(dim);
    let p9 = Array(dim);
    
    for(let i = 1; i < dim; i++) {
        n2[i-1] = Math.round(n) + 2 - i;
        v2[i-1] = n2[i-1]*v1;
        m1[i-1] = c6*Math.pow(10, 9) / (2*Math.PI*frequency*Math.pow(v2[i-1], 2));
        i1[i-1] = power*1000 / (v2[i-1]*p5);
        p9[i-1] = power*1000 / (560*l9 / 460 * i1[i-1] / x_former_ratio);

        if (i1[i-1] > primary_i_max*x_former_ratio) {
            break;
        }
    }
    
    document.getElementById("maxCurrent").innerText = (primary_i_max*x_former_ratio).toFixed(3);
    
    if (wb == "Halfbridge") {
        fm = fm/2;
    }
    document.getElementById("fm").innerText = fm.toFixed(3);
    
    document.getElementById("k1").innerText = k1.toFixed(5);
    document.getElementById("k2").innerText = k2.toFixed(5);
    document.getElementById("k6").innerText = k6.toFixed(5);
    document.getElementById("c2").innerText = c2.toFixed(5);
    document.getElementById("s").innerText = s.toFixed(5);
    document.getElementById("f1").innerText = f1.toFixed(5);
    document.getElementById("p2").innerText = p2.toFixed(5);
    document.getElementById("p3").innerText = p3.toFixed(5);
    document.getElementById("f3").innerText = f3.toFixed(5);
    document.getElementById("f2").innerText = f2.toFixed(5);
    
    document.getElementById("p4").innerText = p4.toFixed(5);
    document.getElementById("b1").innerText = b1.toFixed(5);
    document.getElementById("f4").innerText = f4.toFixed(5);
    document.getElementById("f5").innerText = f5.toFixed(5);
    document.getElementById("a").innerText = a.toFixed(5);
    document.getElementById("b3").innerText = b3.toFixed(5);
    document.getElementById("a3").innerText = a3.toFixed(5);
    document.getElementById("p5").innerText = p5.toFixed(5);
    document.getElementById("e1").innerText = e1.toFixed(5);
    document.getElementById("c6").innerText = c6.toFixed(2);

    document.getElementById("v1").innerText = v1.toFixed(2);
    
    // Calculating values for final data table
    if (transformerless) {
        document.getElementById("transformerlessTable").style.display='block';
        document.getElementById("notTransformerlessTable").style.display='none';
    }
    else {
        document.getElementById("transformerlessTable").style.display='none';
        document.getElementById("notTransformerlessTable").style.display='block';
    }

    let a6 = Array(dim);
    let a9 = Array(dim);
    let v3 = Array(dim);
    let m3 = Array(dim);
    let m4 = Array(dim);
    let v4 = Array(dim);
    let v5 = Array(dim);
    let v6 = Array(dim);
    let ws = Array(dim);

    for(let i = 1; i < dim; i++) {
        if (p9[i-1] == null) {
            continue;
        }
        else if (p9[i-1] > 0.9999999) {
            continue;
        }

        a6[i-1] = fnx(p9[i-1]);
        a9[i-1] = a6[i-1] / (360*frequency);
        v3[i-1] = v2[i-1]*Math.sin(p6*rd) + iv/x_former_ratio*Math.sin(a6[i-1]*rd);
        m3[i-1] = i1[i-1] / (v3[i-1]*2*Math.PI*frequency);
        m4[i-1] = 1 / (1/m3[i-1] - 1 / (x_former_ratio*x_former_ratio*m2));
        v4[i-1] = i1[i-1] * 1/(2*Math.PI*frequency*m4[i-1]);
        v5[i-1] = i1[i-1] / x_former_ratio * 1/(2*Math.PI*frequency*m2);
        v6[i-1] = Math.sqrt(Math.pow(v5[i-1] - iv*Math.sin(a6[i-1]*rd), 2) + Math.pow(iv*p9[i-1], 2));

        if (i1[i-1] < primary_i_max*x_former_ratio) {
            if (a9[i-1] > a8) {
                if (p9[i-1] < a7) {
                    if (m4[i-1]*1000000 < secondary_ufd) {
                        ws[i-1] = "";
                    }
                    else {
                        ws[i-1] = "UFD";
                    }
                }
                else {
                    ws[i-1] = "I.P.F.";
                }
            }
            else {
                ws[i-1] = "T.O.T.";
            }
        }
        else {
            ws[i-1] = "AMP";
        }

        v9 = i1[i-1] / (2*Math.PI*frequency*m1[i-1]*0.000001);
        if (v4[i-1] >= voltage_red_line) {
            ws[i-1] = "C VOLT";
        }
    }

    if (!transformerless) {
        let div_string = "<div class='row'><div class='col-4 tableStats tableHeader'>Coil</div><div class='col-1 tableStats tableHeader'>PRI C</div><div class='col-3 tableStats tableHeader'>Secondary C</div><div class='col-1 tableStats tableHeader'>Transformer</div><div class='col-3 tableStats tableHeader' style='border: 1px solid #e5e6e6; border-bottom: hidden;'>Inverter</div></div><div class='row'><div class='col-1 tableStats tableHeader'>N</div><div class='col-1 tableStats tableHeader'>Volts</div><div class='col-2 tableStats tableHeader'>Amps</div><div class='col-1 tableStats tableHeader'>Volts</div><div class='col-1 tableStats tableHeader'>Volts</div><div class='col-2 tableStats tableHeader'>MFD</div><div class='col-1 tableStats tableHeader'>Volts</div><div class='col-1 tableStats tableHeader'>P.F.</div><div class='col-2 tableStats tableHeader' style='border: 1px solid #e5e6e6; border-bottom: hidden;'>Limit</div></div>";
        
        for(let i = 0; i < n2.length; i++) {
            if (p9[i] == null) {
                continue;
            }
            else if (p9[i] > 0.9999999) {
                continue;
            }
            div_string += "<div class='row'><div class='col-1 tableStats tableCell' style='border-bottom: 1px solid #e5e6e6;'>" + n2[i].toFixed(0) + "</div><div class='col-1 tableStats tableCell' style='border-bottom: 1px solid #e5e6e6;'>" + v2[i].toFixed(0) + "</div><div class='col-2 tableStats tableCell' style='border-bottom: 1px solid #e5e6e6;'>" + i1[i].toFixed(1) + "</div><div class='col-1 tableStats tableCell' style='border-bottom: 1px solid #e5e6e6;'>" + v5[i].toFixed(0) + "</div><div class='col-1 tableStats tableCell' style='border-bottom: 1px solid #e5e6e6;'>" + v4[i].toFixed(0) + "</div><div class='col-2 tableStats tableCell' style='border-bottom: 1px solid #e5e6e6;'>" + (m4[i]*1000000).toFixed(1) + "</div><div class='col-1 tableStats tableCell' style='border-bottom: 1px solid #e5e6e6;'>" + v6[i].toFixed(0) + "</div><div class='col-1 tableStats tableCell' style='border-bottom: 1px solid #e5e6e6;'>" + p9[i].toFixed(3) + "</div><div class='col-2 tableStats tableCell' style='border: 1px solid #e5e6e6;'>" + ws[i] + "</div></div>";
        }
        
        document.getElementById("notTransformerlessTable").innerHTML = div_string;
    }
    else {
        let div_string = "<div class='row'><div class='col-1'></div><div class='col-5 tableStats tableHeader'>Coil</div><div class='col-3 tableStats tableHeader'>Capacitor</div><div class='col-2 tableStats tableHeader' style='border: 1px solid #e5e6e6; border-bottom: hidden;'>Inverter</div><div class='col-1'></div></div><div class='row'><div class='col-1'></div><div class='col-1 tableStats tableHeader'>Turns</div><div class='col-2 tableStats tableHeader'>Volts</div><div class='col-2 tableStats tableHeader'>Amps</div><div class='col-2 tableStats tableHeader'>Volts</div><div class='col-1 tableStats tableHeader'>MFD</div><div class='col-1 tableStats tableHeader'>P.F.</div><div class='col-1 tableStats tableHeader' style='border: 1px solid #e5e6e6; border-bottom: hidden;'>Limit</div><div class='col-1'></div></div>";
        
        for(let i = 0; i < n2.length; i++) {
            if (p9[i] == null) {
                    continue;
                }
                else if (p9[i] > 0.9999999) {
                    continue;
                }
            div_string += "<div class='row'><div class='col-1'></div><div class='col-1 tableStats tableCell' style='border-bottom: 1px solid #e5e6e6;'>" + n2[i].toFixed(0) + "</div><div class='col-2 tableStats tableCell' style='border-bottom: 1px solid #e5e6e6;'>" + v2[i].toFixed(0) + "</div><div class='col-2 tableStats tableCell' style='border-bottom: 1px solid #e5e6e6;'>" + i1[i].toFixed(0) + "</div><div class='col-2 tableStats tableCell' style='border-bottom: 1px solid #e5e6e6;'>" + v4[i].toFixed(0) + "</div><div class='col-1 tableStats tableCell' style='border-bottom: 1px solid #e5e6e6;'>" + (m4[i] * 1000000).toFixed(1) + "</div><div class='col-1 tableStats tableCell' style='border-bottom: 1px solid #e5e6e6;'>" + p9[i].toFixed(3) + "</div><div class='col-1 tableStats tableCell' style='border: 1px solid #e5e6e6;'>" + ws[i] + "</div><div class='col-1'></div></div>";
            
        }
        document.getElementById("transformerlessTable").innerHTML = div_string;
    }
    
    window.scrollTo(screen.width/2, 1360);
}

