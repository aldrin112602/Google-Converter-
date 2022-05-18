  (() => {
    try {
     'use strict';
     const $ = (element) => {
       const el = document.querySelectorAll(element);
       return (el.length > 1) ? el : document.querySelector(element);
     }
     const select = $('select');
     const input = $('input');
     const opt = $('.opt');
     
     input.forEach(i => {
       i.onclick = () => {
         i.select();
       }
       
     })
     
     const options = [
        'Area', 'Data Transfer Rate', 'Digital Storage', 'Energy', 'Frequency', 'Fuel Economy', 'Length', 'Mass', 'Plane Angle', 'Pressure', 'Speed', 'Temperature', 'Time', 'Volume'
       ];
     for(var value of options) {
       const option = document.createElement('option');
       option.textContent = value;
       select[0].appendChild(option);
     }
     const def_func = () => {
       const options = [
                  'Square kilometer', 'Square meter', 'Square mile', 'Square yard', 'Square foot', 'Square inch', 'Hectare', 'Acre'
                 ];
       options.forEach((opt, i) => {
         const option = document.createElement('option');
         option.textContent = opt;
         if (i == 1) option.selected = 'selected';
         select[1].appendChild(option);
       });
       
       options.forEach((opt, i) => {
         const option = document.createElement('option');
         option.textContent = opt;
         if (i == 0) option.selected = 'selected';
         select[2].appendChild(option);
       });
       const square_meter_to_square_kilometer = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value / 1e+6; 
             } else {
               input[0].value = el.value * 1e+6;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       const sq_km_to_sq_m = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value * 1e+6; 
             } else {
               input[0].value = el.value / 1e+6;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       const sq_m_to_sq_mile = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value / 2.59e+6; 
             } else {
               input[0].value = el.value * 2.59e+6;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       const sq_mile_to_sq_m = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value * 2.59e+6; 
             } else {
               input[0].value = el.value / 2.59e+6;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       const sq_m_to_sq_yard = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value * 1.196;
             } else {
               input[0].value = el.value / 1.196;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       const sq_yard_to_sq_m = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value / 1.196;
             } else {
               input[0].value = el.value * 1.196;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       const sq_m_to_sq_foot = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value * 10.764;
             } else {
               input[0].value = el.value / 10.764;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       const sq_foot_to_sq_m = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value / 10.764;
             } else {
               input[0].value = el.value * 10.764;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       const sq_m_to_sq_inch = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value * 1550;
             } else {
               input[0].value = el.value / 1550;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
      
       const sq_inch_to_sq_m = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value / 1550;
             } else {
               input[0].value = el.value * 1550;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       const sq_m_to_hectare = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value / 10000;
             } else {
               input[0].value = el.value * 10000;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       const hectare_to_sq_m = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value * 10000;
             } else {
               input[0].value = el.value / 10000;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       const sq_m_to_acre = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value / 4047;
             } else {
               input[0].value = el.value * 4047;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       
       const acre_to_sq_m = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value * 4047;
             } else {
               input[0].value = el.value / 4047;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       const sq_kl_to_sq_mile = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value / 2.59;
             } else {
               input[0].value = el.value * 2.59;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       const sq_mile_to_sq_kl = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value * 2.59;
             } else {
               input[0].value = el.value / 2.59;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       const sq_kl_to_sq_yard = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value * 1.196e+6;
             } else {
               input[0].value = el.value / 1.196e+6;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       const sq_yard_to_sq_kl = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value / 1.196e+6;
             } else {
               input[0].value = el.value * 1.196e+6;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       const sq_kl_to_sq_foot = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value * 1.076e+7;
             } else {
               input[0].value = el.value / 1.076e+7;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
    
       const sq_foot_to_sq_kl = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value / 1.076e+7;
             } else {
               input[0].value = el.value * 1.076e+7;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
      
       const sq_kl_to_sq_inch = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value * 1.55e+9;
             } else {
               input[0].value = el.value / 1.55e+9;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       
       const sq_inch_to_sq_kl = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value / 1.55e+9;
             } else {
               input[0].value = el.value * 1.55e+9;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       
       const sq_kl_to_sq_hectare = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value * 100;
             } else {
               input[0].value = el.value / 100;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       
       const sq_hectare_to_sq_kl = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value / 100;
             } else {
               input[0].value = el.value * 100;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       const sq_kl_to_sq_acre = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value * 247.105;
             } else {
               input[0].value = el.value / 247.105;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       const sq_mile_to_sq_yard = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value * 3.098e+6;
             } else {
               input[0].value = el.value / 3.098e+6;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       const sq_yard_to_sq_mile = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value / 3.098e+6;
             } else {
               input[0].value = el.value * 3.098e+6;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       
       
       const sq_mile_to_sq_foot = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value * 2.788e+7;
             } else {
               input[0].value = el.value / 2.788e+7;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       
       const sq_foot_to_sq_mile = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value / 2.788e+7;
             } else {
               input[0].value = el.value * 2.788e+7;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       
       
       const sq_acre_to_sq_kl = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value / 247.105;
             } else {
               input[0].value = el.value * 247.105;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       
       const sq_mile_to_sq_inch = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value * 4.014e+9;
             } else {
               input[0].value = el.value / 4.014e+9;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       
       const sq_inch_to_sq_mile = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value / 4.014e+9;
             } else {
               input[0].value = el.value * 4.014e+9;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       
       
      
       const sq_mile_to_sq_acre = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value * 640;
             } else {
               input[0].value = el.value / 640;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       
       
       const sq_acre_to_sq_mile = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value / 640;
             } else {
               input[0].value = el.value * 640;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       
       
       
       const sq_mile_to_sq_hectare = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value * 259;
             } else {
               input[0].value = el.value / 259;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       
       const sq_hectare_to_sq_mile = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value / 259;
             } else {
               input[0].value = el.value * 259;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       
      
      const sq_yard_to_sq_foot = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value * 9;
             } else {
               input[0].value = el.value / 9;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       
       
       const sq_foot_to_sq_yard = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value / 9;
             } else {
               input[0].value = el.value * 9;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
        
       
       const sq_yard_to_sq_inch = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value * 1296;
             } else {
               input[0].value = el.value / 1296;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       
       
       const sq_inch_to_sq_yard = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value / 1296;
             } else {
               input[0].value = el.value * 1296;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
        
        
       const sq_yard_to_sq_hectare = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value / 11960;
             } else {
               input[0].value = el.value * 11960;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       
       
       const sq_hectare_to_sq_yard = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value * 11960;
             } else {
               input[0].value = el.value / 11960;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       
       
       const sq_yard_to_sq_acre = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value / 4840;
             } else {
               input[0].value = el.value * 4840;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       
       
       const sq_acre_to_sq_yard = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value * 4840;
             } else {
               input[0].value = el.value / 4840;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       
       
       const sq_foot_to_sq_inch = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value * 144;
             } else {
               input[0].value = el.value / 144;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       
       
       const sq_inch_to_sq_foot = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value / 144;
             } else {
               input[0].value = el.value * 144;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       
      const sq_foot_to_sq_hectare = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value / 107639;
             } else {
               input[0].value = el.value * 107639;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       
       
       const sq_hectare_to_sq_foot = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value * 107639;
             } else {
               input[0].value = el.value / 107639;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       
       
       const sq_foot_to_sq_acre = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value / 43560;
             } else {
               input[0].value = el.value * 43560;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       
       
       const sq_acre_to_sq_foot = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value * 43560;
             } else {
               input[0].value = el.value / 43560;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       
       
       const sq_inch_to_sq_hectare = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value / 1.55e+7;
             } else {
               input[0].value = el.value * 1.55e+7;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       
       
       const sq_hectare_to_sq_inch = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value * 1.55e+7;
             } else {
               input[0].value = el.value / 1.55e+7;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       
       
       
       
       const sq_inch_to_sq_acre = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value / 6.273e+6;
             } else {
               input[0].value = el.value * 6.273e+6;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       
       
       const sq_acre_to_sq_inch = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value * 6.273e+6;
             } else {
               input[0].value = el.value / 6.273e+6;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
      
      
      const sq_hectare_to_sq_acre = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value * 2.471;
             } else {
               input[0].value = el.value / 2.471;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       
       
       const sq_acre_to_sq_hectare = () => {
         input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value / 2.471;
             } else {
               input[0].value = el.value * 2.471;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
       }
       if(select[1].value == options[1] && select[2].value == options[0]) {
         square_meter_to_square_kilometer();
       }
       opt.forEach(opt => {
         opt.onchange = () => {
          input.forEach((el) => {
               el.value = 0;
         });
         if(select[1].value == options[1] && select[2].value == options[0]) {
           square_meter_to_square_kilometer();
         }
         else if(select[1].value == select[2].value) {
           input.forEach((el, i) => {
           el.oninput = () => {
             if(i == 0) {
               input[1].value = el.value;
             } else {
               input[0].value = el.value;
             }
             if(el.value == '') input.forEach(e => e.value = null);
           }
         })
         }
         else if(select[1].value == options[6] && select[2].value == options[7]) {
           sq_hectare_to_sq_acre();
         } 
         else if(select[1].value == options[7] && select[2].value == options[6]) {
           sq_acre_to_sq_hectare();
         }
         else if(select[1].value == options[5] && select[2].value == options[7]) {
           sq_inch_to_sq_acre();
         }
         else if(select[1].value == options[7] && select[2].value == options[5]) {
           sq_acre_to_sq_inch();
         }
         else if(select[1].value == options[5] && select[2].value == options[6]) {
           sq_inch_to_sq_hectare();
         }
         else if(select[1].value == options[6] && select[2].value == options[5]) {
           sq_hectare_to_sq_inch();
         }
         else if(select[1].value == options[4] && select[2].value == options[7]) {
           sq_foot_to_sq_acre();
         }
         else if(select[1].value == options[7] && select[2].value == options[4]) {
           sq_acre_to_sq_foot();
         }
         else if(select[1].value == options[4] && select[2].value == options[6]) {
           sq_foot_to_sq_hectare();
         }
         else if(select[1].value == options[6] && select[2].value == options[4]) {
           sq_hectare_to_sq_foot();
         }
         else if(select[1].value == options[4] && select[2].value == options[5]) {
           sq_foot_to_sq_inch();
         }
         else if(select[1].value == options[5] && select[2].value == options[4]) {
           sq_inch_to_sq_foot();
         }
         else if(select[1].value == options[3] && select[2].value == options[7]) {
           sq_yard_to_sq_acre();
         } 
         else if(select[1].value == options[7] && select[2].value == options[3]) {
           sq_acre_to_sq_yard();
         }
         else if(select[1].value == options[3] && select[2].value == options[6]) {
           sq_yard_to_sq_hectare();
         } 
         else if(select[1].value == options[6] && select[2].value == options[3]) {
           sq_hectare_to_sq_yard();
         }
         else if(select[1].value == options[3] && select[2].value == options[5]) {
           sq_yard_to_sq_inch();
         } 
         else if(select[1].value == options[5] && select[2].value == options[3]) {
           sq_inch_to_sq_yard();
         }
         else if(select[1].value == options[3] && select[2].value == options[4]) {
           sq_yard_to_sq_foot();
         }
         else if(select[1].value == options[4] && select[2].value == options[3]) {
           sq_foot_to_sq_yard();
         }
         else if(select[1].value == options[2] && select[2].value == options[7]) {
           sq_mile_to_sq_acre();
         }
         else if(select[1].value == options[7] && select[2].value == options[2]) {
           sq_acre_to_sq_mile();
         }
         else if(select[1].value == options[2] && select[2].value == options[6]) {
           sq_mile_to_sq_hectare();
         } 
         else if(select[1].value == options[6] && select[2].value == options[2]) {
           sq_hectare_to_sq_mile();
         }
         else if(select[1].value == options[2] && select[2].value == options[5]) {
           sq_mile_to_sq_inch();
         } 
         else if(select[1].value == options[5] && select[2].value == options[2]) {
           sq_inch_to_sq_mile();
         }
         else if(select[1].value == options[2] && select[2].value == options[4]) {
           sq_mile_to_sq_foot();
         } 
         else if(select[1].value == options[4] && select[2].value == options[2]) {
           sq_foot_to_sq_mile();
         }
         else if(select[1].value == options[2] && select[2].value == options[3]) {
           sq_mile_to_sq_yard();
         } 
         else if(select[1].value == options[3] && select[2].value == options[2]) {
           sq_yard_to_sq_mile();
         }
         else if(select[1].value == options[0] && select[2].value == options[7]) {
           sq_kl_to_sq_acre();
         } 
         else if(select[1].value == options[7] && select[2].value == options[0]) {
           sq_acre_to_sq_kl();
         }
         else if(select[1].value == options[0] && select[2].value == options[6]) {
           sq_kl_to_sq_hectare();
         }
         else if (select[1].value == options[6] && select[2].value == options[0]) {
           sq_hectare_to_sq_kl();
         }
         else if(select[1].value == options[0] && select[2].value == options[5]) {
           sq_kl_to_sq_inch();
         } 
         else if (select[1].value == options[5] && select[2].value == options[0]) {
           sq_inch_to_sq_kl();
         }
         else if(select[1].value == options[0] && select[2].value == options[1]) {
           sq_km_to_sq_m();
         }
         else if(select[1].value == options[0] && select[2].value == options[4]) {
           sq_kl_to_sq_foot();
         } 
         else if (select[1].value == options[4] && select[2].value == options[0]) {
           sq_foot_to_sq_kl();
         }
         else if(select[1].value == options[0] && select[2].value == options[3]) {
           sq_kl_to_sq_yard();
         } 
         else if(select[1].value == options[3] && select[2].value == options[0]) {
           sq_yard_to_sq_kl();
         } 
         else if(select[1].value == options[0] && select[2].value == options[2]) {
           sq_kl_to_sq_mile();
         } 
         else if(select[1].value == options[2] && select[2].value == options[0]) {
           sq_mile_to_sq_kl();
         } 
          else if(select[1].value == options[1] && select[2].value == options[2]) {
           sq_m_to_sq_mile();
         }
         else if(select[1].value == options[2] && select[2].value == options[1]) {
           sq_mile_to_sq_m();
         }
         else if(select[1].value == options[1] && select[2].value == options[3]) {
           sq_m_to_sq_yard();
         }
         else if (select[1].value == options[3] && select[2].value == options[1]) {
           sq_yard_to_sq_m();
         }
         else if(select[1].value == options[1] && select[2].value == options[4]) {
           sq_m_to_sq_foot();
         }
         else if (select[1].value == options[4] && select[2].value == options[1]) {
           sq_foot_to_sq_m();
         }
         else if(select[1].value == options[1] && select[2].value == options[5]) {
           sq_m_to_sq_inch();
         }
         else if (select[1].value == options[5] && select[2].value == options[1]) {
           sq_inch_to_sq_m();
         }
         else if(select[1].value == options[1] && select[2].value == options[6]) {
           sq_m_to_hectare();
         }
         else if (select[1].value == options[6] && select[2].value == options[1]) {
          hectare_to_sq_m();
         }
         else if(select[1].value == options[1] && select[2].value == options[7]) {
           sq_m_to_acre();
         }
         else if (select[1].value == options[7] && select[2].value == options[1]) {
          acre_to_sq_m();
         }
         
         
       }
       })
       
       
      
       
     }
     
     def_func();
     
     
     select[0].onchange = () => {
       const type = select[0].value;
       select[1].innerHTML = '';
       select[2].innerHTML = '';
       input.forEach((el) => {
         el.value = 0;
       });
       if(type == options[0]) {
         //Area
         def_func();
         
       } else if (type == options[1]) {
         //Data transfer rate
         var str = ' per second';
         const options = [
           'Bit' + str, 'Kilobit' + str, 'kilobyte' + str, 'Kibibit' + str, 'Megabit' + str, 'Megabyte' + str, 'Mebibit' + str, 'Gigabit' + str, 'Gigabyte' + str, 'Gibibit' + str, 'Terabit' + str, 'Terabyte' + str, 'Tebibit' + str
           ];
         options.forEach((opt, i) => {
           const option = document.createElement('option');
           option.textContent = opt;
           if(i == 0) option.selected = 'selected';
           select[1].appendChild(option);
         })
         
         options.forEach((opt, i) => {
           const option = document.createElement('option');
           option.textContent = opt;
           if(i == 1) option.selected = 'selected';
           select[2].appendChild(option);
         })
         
       } else if (type == options[2]) {
         //Digital Storage
         const options = [
                    'Bit', 'Kilobit', 'Kibibit', 'Megabit', 'Mebibit', 'Gigabit', 'Gigabit', 'Terabit', 'Tebibit', 'Petabit', 'Pebibit', 'Byte', 'Kilobyte', 'Kibibyte', 'Megabyte', 'Mebibyte', 'Gigabyte', 'Gibibyte', 'Terabyte', 'Tebibyte', 'Petabyte', 'Pebibyte'
                    ];
         options.forEach((opt, i) => {
           const option = document.createElement('option');
           option.textContent = opt;
           if (i == options.indexOf('Byte')) option.selected = 'selected';
           select[1].appendChild(option);
         })
         
         options.forEach((opt, i) => {
           const option = document.createElement('option');
           option.textContent = opt;
           if (i == options.indexOf('Kilobyte')) option.selected = 'selected';
           select[2].appendChild(option);
         })
         
       } else if (type == options[3]) {
         //Energy
         const options = [
                    'Joule', 'Kilojoule', 'Gram calorie', 'Kilocalorie', 'Watt hour', 'Kilowatt hour', 'Electronvolt', 'British thermal unit', 'US therm', 'Foot-pound'
                    ];
         options.forEach((opt, i) => {
           const option = document.createElement('option');
           option.textContent = opt;
           if (i == 0) option.selected = 'selected';
           select[1].appendChild(option);
         })
         
         options.forEach((opt, i) => {
           const option = document.createElement('option');
           option.textContent = opt;
           if (i == 1) option.selected = 'selected';
           select[2].appendChild(option);
         })
         
       } else if (type == options[4]) {
         //Frequency
         const options = [
                    'Hertz', 'Kilohertz', 'Megahertz', 'Gigahertz'
                    ];
         options.forEach((opt, i) => {
           const option = document.createElement('option');
           option.textContent = opt;
           if (i == 0) option.selected = 'selected';
           select[1].appendChild(option);
         })
         
         options.forEach((opt, i) => {
           const option = document.createElement('option');
           option.textContent = opt;
           if (i == 1) option.selected = 'selected';
           select[2].appendChild(option);
         })
         
       } else if (type == options[5]) {
         //Fuel economy
         const options = [
                    'Miles per gallon (Imperial)', 'Kilometer per liter', 'Liter per 100 kilometers'
                    ];
         options.forEach((opt, i) => {
           const option = document.createElement('option');
           option.textContent = opt;
           if (i == 1) option.selected = 'selected';
           select[1].appendChild(option);
         })
         
         options.forEach((opt, i) => {
           const option = document.createElement('option');
           option.textContent = opt;
           if (i == 0) option.selected = 'selected';
           select[2].appendChild(option);
         })
       
       } else if (type == options[6]) {
         //Length
         const options = [
           'Kilometre', 'Meter', 'Centimetre', 'Milletre', 'Micrometres', 'Nanometre', 'Mile', 'Yard', 'Foot', 'Inch', 'Nautical mile'
           ];
         for(var opt of options) {
           const option = document.createElement('option');
           option.textContent = opt;
           select[1].appendChild(option);
         }
         
         options.forEach((opt, i) => {
           const option = document.createElement('option');
           option.textContent = opt;
           if(i == 1) option.selected = 'selected';
           select[2].appendChild(option);
         })
       
       } else if (type == options[7]) {
         //Mass
         const options = [
           'tonne', 'Kilogram', 'Gram', 'Milligram', 'Microgram', 'Imperial ton', 'US ton', 'Stone', 'Pound', 'Ounce'
           ];
         options.forEach((opt, i) => {
           const option = document.createElement('option');
           option.textContent = opt;
           if(i == 1) option.selected = 'selected';
           select[1].appendChild(option);
         })
         
         options.forEach((opt, i) => {
           const option = document.createElement('option');
           option.textContent = opt;
           if(i == 2) option.selected = 'selected';
           select[2].appendChild(option);
         })
       
       } else if (type == options[8]) {
         //Plane Angle
         const options = [
           'Degree', 'Gradian', 'Milliradian', 'Minute of arc', 'Radian', 'Second of arc'
           ];
         for(var opt of options) {
           const option = document.createElement('option');
           option.textContent = opt;
           select[1].appendChild(option);
         }
         
         options.forEach((opt, i) => {
           const option = document.createElement('option');
           option.textContent = opt;
           if(i == 4) option.selected = 'selected';
           select[2].appendChild(option);
         })
       
       } else if (type == options[9]) {
         //Pressure
         const options = [
           'Bar', 'Pascal', 'Pound per square inch', 'Standard atmosphere', 'Torr'
           ];
         for(var opt of options) {
           const option = document.createElement('option');
           option.textContent = opt;
           select[1].appendChild(option);
         }
         
         options.forEach((opt, i) => {
           const option = document.createElement('option');
           option.textContent = opt;
           if(i == 1) option.selected = 'selected';
           select[2].appendChild(option);
         })
       
       } else if (type == options[10]) {
         //Speed
         const options = [
           'Miles per hour', 'Foot per second', 'Meter per second', 'Kilometer per hour', 'Knot'
           ];
         options.forEach((opt, i) => {
           const option = document.createElement('option');
           option.textContent = opt;
           if(i == 2) option.selected = 'selected';
           select[1].appendChild(option);
         })
         
         options.forEach((opt, i) => {
           const option = document.createElement('option');
           option.textContent = opt;
           if(i == 3) option.selected = 'selected';
           select[2].appendChild(option);
         })
       
       } else if (type == options[11]) {
         //Temperature
         const options = [
           'Celcius', 'Fahrenheit', 'Kelvin'
           ];
         options.forEach((opt, i) => {
           const option = document.createElement('option');
           option.textContent = opt;
           select[1].appendChild(option);
         })
         
         options.forEach((opt, i) => {
           const option = document.createElement('option');
           option.textContent = opt;
           if(i == 1) option.selected = 'selected';
           select[2].appendChild(option);
         })
       
       } else if (type == options[12]) {
         //Time
         const options = [
           'Nanosecond', 'Microsecond', 'Millisecond', 'Second', 'Minute', 'Hour', 'Day', 'Week', 'Month', 'Calendar Year', 'Decade', 'Century'
           ];
         options.forEach((opt, i) => {
           const option = document.createElement('option');
           option.textContent = opt;
           if(i == 3) option.selected = 'selected';
           select[1].appendChild(option);
         })
         
         options.forEach((opt, i) => {
           const option = document.createElement('option');
           option.textContent = opt;
           if(i == 4) option.selected = 'selected';
           select[2].appendChild(option);
         })
       
       } else {
         //Volume
         const options = [
           'US liquid gallon', 'US liquid quart', 'US liquid pint', 'US legal cup', 'Fluid ounce', 'US tablespoon', 'US teaspoon', 'Cubic meter', 'Liter', 'Milliliter', 'Imperial gallon', 'Imperial quat', 'Imperial pint', 'Imperial cup','Fluid ounce', 'Imperial tablespoon', 'Imperial teaspoon', 'Cubic foot', 'Cubic inch'
           ];
         options.forEach((opt, i) => {
           const option = document.createElement('option');
           option.textContent = opt;
           if(i == 8) option.selected = 'selected';
           select[1].appendChild(option);
         })
         
         options.forEach((opt, i) => {
           const option = document.createElement('option');
           option.textContent = opt;
           if(i == 9) option.selected = 'selected';
           select[2].appendChild(option);
         })
         
       }
      } 
     } catch(err) {
       console.error(err);
       alert(err);
     }
    })();
