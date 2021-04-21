$(document).ready(function() {

    var button10 = document.getElementById('tip-10');
    var button15 = document.getElementById('tip-15');
    var button20 = document.getElementById('tip-20');

    var sub_amt = document.getElementById('subtotal-amt');
    var tax_amt = document.getElementById('tax-amt');
    var tot_amt = document.getElementById("total-amt");
    var tot_amt_no_tip = 0;
    var tip = 0.2;

    var afw1_split = 0;
    var afw2_split = 0;
    var gknots_split = 0;

    const tax_mult = 0.04;

    /*
    Listens for Select all button to be clicked
    Grab all needed elements on the page
    Select all the buttons and chnage the price accordingly
    Returns nothing
    */
    $('#slct').click(function(e){
        var gknots = document.getElementById("GK");
        var afw1 = document.getElementById("AFW1");
        var afw2 = document.getElementById("AFW2");

        var sub_num = parseFloat(sub_amt.innerHTML)
        var tax_num = parseFloat(tax_amt.innerHTML)
        var sub_chnge_amt = 0;
        var tax_chnge_amt = 0;

        if (!gknots.checked){
            gknots.checked = true;

            gknots_split=gknots_split+1;

            sub_chnge_amt = 5.00
            tax_chnge_amt=sub_chnge_amt*tax_mult

            sub_num = sub_num+sub_chnge_amt;
            tax_num = tax_num+tax_chnge_amt;

            sub_amt.innerHTML = sub_num.toFixed(2);
            tax_amt.innerHTML = tax_num.toFixed(2);
            chge_tot(sub_num+tax_num, tip);
            tot_amt_no_tip = sub_num+tax_num;
        }

        if (!afw1.checked){
            afw1.checked = true;

            afw1_split = afw1_split+1;

            sub_chnge_amt = 21.00
            tax_chnge_amt=sub_chnge_amt*tax_mult

            sub_num = sub_num+sub_chnge_amt;
            tax_num = tax_num+tax_chnge_amt;

            sub_amt.innerHTML = sub_num.toFixed(2);
            tax_amt.innerHTML = tax_num.toFixed(2);
            chge_tot(sub_num+tax_num, tip);
            tot_amt_no_tip = sub_num+tax_num;
        }

        if (!afw2.checked){
            afw2.checked = true;

            afw2_split = afw2_split+1;

            sub_chnge_amt = 21.00
            tax_chnge_amt=sub_chnge_amt*tax_mult

            sub_num = sub_num+sub_chnge_amt;
            tax_num = tax_num+tax_chnge_amt;

            sub_amt.innerHTML = sub_num.toFixed(2);
            tax_amt.innerHTML = tax_num.toFixed(2);
            chge_tot(sub_num+tax_num, tip);
            tot_amt_no_tip = sub_num+tax_num;
        }

    });

    /*
    Listens for %20 tip button to be clicked
    Grab all needed elements on the page
    Change HTML Style of tip buttons accordingly
    Change the price accordingly
    Returns nothing
    */
    $('#tip-20').click(function(e){
        if(!button20.classList.contains('option-light-selected-iyMpb6')){
            button20.classList.add('option-light-selected-iyMpb6')
            button20.classList.remove('option-light-de-selected-iyMpb6')
            button20.innerHTML = '<div class="background-TzDfVE border-0-5px-black-2"></div>'+ '<div class="x25-i697368176-TzDfVE valign-text-middle">20%</div>';
            tip = 0.2
            chge_tot(tot_amt_no_tip, tip);
        }

        if(button10.classList.contains('option-light-selected-iyMpb6')){
            button10.classList.remove('option-light-selected-iyMpb6')
            button10.classList.add('option-light-de-selected-iyMpb6')
            button10.innerHTML = '<div class="option-light-selected-xhuaGG"><div class="other-i697368159-gaFY5o valign-text-middle">10%</div></div>';
        }

        if(button15.classList.contains('option-light-selected-iyMpb6')){
            button15.classList.remove('option-light-selected-iyMpb6')
            button15.classList.add('option-light-de-selected-iyMpb6')
            button15.innerHTML = '<div class="option-light-selected-uo108U"><div class="x20-i697368168-1M0x4x valign-text-middle">15%</div><div class="separator-1M0x4x"></div></div>';
        }
    });

    /*
    Listens for %15 tip button to be clicked
    Grab all needed elements on the page
    Change HTML Style of tip buttons accordingly
    Change the price accordingly
    Returns nothing
    */
    $('#tip-15').click(function(e){
        if(!button15.classList.contains('option-light-selected-iyMpb6')){
            button15.classList.add('option-light-selected-iyMpb6')
            button15.classList.remove('option-light-de-selected-iyMpb6')
            button15.innerHTML = '<div class="background-TzDfVE border-0-5px-black-2"></div>'+ '<div class="x25-i697368176-TzDfVE valign-text-middle">15%</div>';
            tip = 0.15
            chge_tot(tot_amt_no_tip, tip);
        }

        if(button10.classList.contains('option-light-selected-iyMpb6')){
            button10.classList.remove('option-light-selected-iyMpb6')
            button10.classList.add('option-light-de-selected-iyMpb6')
            button10.innerHTML = '<div class="option-light-selected-xhuaGG"><div class="other-i697368159-gaFY5o valign-text-middle">10%</div></div>';
        }

        if(button20.classList.contains('option-light-selected-iyMpb6')){
            button20.classList.remove('option-light-selected-iyMpb6')
            button20.classList.add('option-light-de-selected-iyMpb6')
            button20.innerHTML = '<div class="option-light-selected-uo108U"><div class="x20-i697368168-1M0x4x valign-text-middle">20%</div><div class="separator-1M0x4x"></div></div>';
        }
    });

    /*
    Listens for %10 tip button to be clicked
    Grab all needed elements on the page
    Change HTML Style of tip buttons accordingly
    Change the price accordingly
    Returns nothing
    */
    $('#tip-10').click(function(e){
        if(!button10.classList.contains('option-light-selected-iyMpb6')){
            button10.classList.add('option-light-selected-iyMpb6')
            button10.classList.remove('option-light-de-selected-iyMpb6')
            button10.innerHTML = '<div class="background-TzDfVE border-0-5px-black-2"></div>'+ '<div class="x25-i697368176-TzDfVE valign-text-middle">10%</div>';
            tip = 0.1
            chge_tot(tot_amt_no_tip, tip);
        }

        if(button15.classList.contains('option-light-selected-iyMpb6')){
            button15.classList.remove('option-light-selected-iyMpb6')
            button15.classList.add('option-light-de-selected-iyMpb6')
            button15.innerHTML = '<div class="option-light-selected-uo108U"><div class="x20-i697368168-1M0x4x valign-text-middle">15%</div><div class="separator-1M0x4x"></div></div>';
        }

        if(button20.classList.contains('option-light-selected-iyMpb6')){
            button20.classList.remove('option-light-selected-iyMpb6')
            button20.classList.add('option-light-de-selected-iyMpb6')
            button20.innerHTML = '<div class="option-light-selected-uo108U"><div class="x20-i697368168-1M0x4x valign-text-middle">20%</div><div class="separator-1M0x4x"></div></div>';
        }
    });

    /*
    Listens for the first Alfredo Williams button to be clicked
    Grab all needed elements on the page
    Change HTML Style of buttons accordingly
    Change the price accordingly
    Adds a split to the dish
    Returns nothing
    */
    $('#AFW1').click(function(e){
        var afw1 = document.getElementById("AFW1");
        var afw1_RR = document.getElementById("afw1-RR");
        var afw1_JM = document.getElementById("afw1-JM");

        var sub_num = parseFloat(sub_amt.innerHTML)
        var tax_num = parseFloat(tax_amt.innerHTML)
        var sub_chnge_amt = 0;
        var tax_chnge_amt = 0;
        if (afw1.checked){

            afw1_split = afw1_split+1;

            sub_chnge_amt = 21.00
            tax_chnge_amt=sub_chnge_amt*tax_mult

            sub_num = sub_num+sub_chnge_amt;
            tax_num = tax_num+tax_chnge_amt;

            sub_amt.innerHTML = sub_num.toFixed(2);
            tax_amt.innerHTML = tax_num.toFixed(2);
            chge_tot(sub_num+tax_num, tip);
            tot_amt_no_tip = sub_num+tax_num;
        }
        else{

            var menu = document.getElementById("split-menu1");

            menu.hidden = true;

            afw1_JM.checked = false;
            afw1_RR.checked = false;

            afw1_price_split(21);

            sub_chnge_amt = -21.00/afw1_split
            tax_chnge_amt=sub_chnge_amt*tax_mult

            sub_num = sub_num+sub_chnge_amt;
            tax_num = tax_num+tax_chnge_amt;

            sub_amt.innerHTML = sub_num.toFixed(2);
            tax_amt.innerHTML = tax_num.toFixed(2);
            chge_tot(sub_num+tax_num, tip);
            tot_amt_no_tip = sub_num+tax_num;
            afw1_split = 0;
        }
    });

    /*
    Listens for the second Alfredo Williams button to be clicked
    Grab all needed elements on the page
    Change HTML Style of buttons accordingly
    Change the price accordingly
    Adds a split to the dish
    Returns nothing
    */
    $('#AFW2').click(function(e){
        var afw2 = document.getElementById("AFW2");
        var afw2_RR = document.getElementById("afw2-RR");
        var afw2_JM = document.getElementById("afw2-JM");

        var sub_num = parseFloat(sub_amt.innerHTML)
        var tax_num = parseFloat(tax_amt.innerHTML)
        var sub_chnge_amt = 0;
        var tax_chnge_amt = 0;

        if (afw2.checked){

            afw2_split = afw2_split+1;

            sub_chnge_amt = 21.00
            tax_chnge_amt=sub_chnge_amt*tax_mult

            sub_num = sub_num+sub_chnge_amt;
            tax_num = tax_num+tax_chnge_amt;

            sub_amt.innerHTML = sub_num.toFixed(2);
            tax_amt.innerHTML = tax_num.toFixed(2);
            chge_tot(sub_num+tax_num, tip);
            tot_amt_no_tip = sub_num+tax_num;
        }
        else{

            var menu = document.getElementById("split-menu2");

            menu.hidden = true;

            afw2_JM.checked = false;
            afw2_RR.checked = false;

            afw2_price_split(21);

            sub_chnge_amt = -21.00/afw2_split
            tax_chnge_amt=sub_chnge_amt*tax_mult

            sub_num = sub_num+sub_chnge_amt;
            tax_num = tax_num+tax_chnge_amt;

            sub_amt.innerHTML = sub_num.toFixed(2);
            tax_amt.innerHTML = tax_num.toFixed(2);
            chge_tot(sub_num+tax_num, tip);
            tot_amt_no_tip = sub_num+tax_num;

            afw2_split = 0;
        }
    });

    /*
    Listens for the Garlic Knots button to be clicked
    Grab all needed elements on the page
    Change HTML Style of buttons accordingly
    Change the price accordingly
    Adds a split to the dish
    Returns nothing
    */
    $('#GK').click(function(e){
        var gknots = document.getElementById("GK");
        var gknots_RR = document.getElementById("gknots-RR");
        var gknots_JM = document.getElementById("gknots-JM");

        var sub_num = parseFloat(sub_amt.innerHTML)
        var tax_num = parseFloat(tax_amt.innerHTML)
        var sub_chnge_amt = 0;
        var tax_chnge_amt = 0;
        if (gknots.checked){

            gknots_split = gknots_split+1;

            sub_chnge_amt = 5.00;
            tax_chnge_amt = sub_chnge_amt*tax_mult;

            sub_num = sub_num+sub_chnge_amt;
            tax_num = tax_num+tax_chnge_amt;

            sub_amt.innerHTML = sub_num.toFixed(2);
            tax_amt.innerHTML = tax_num.toFixed(2);
            chge_tot(sub_num+tax_num, tip);
            tot_amt_no_tip = sub_num+tax_num;
        }
        else{

            var menu = document.getElementById("split-menu3");

            menu.hidden = true;

            gknots_JM.checked = false;
            gknots_RR.checked = false;

            gknots_price_split(5);

            sub_chnge_amt = -5.00/gknots_split;
            tax_chnge_amt = sub_chnge_amt*tax_mult;

            sub_num = sub_num+sub_chnge_amt;
            tax_num = tax_num+tax_chnge_amt;

            sub_amt.innerHTML = sub_num.toFixed(2);
            tax_amt.innerHTML = tax_num.toFixed(2);
            chge_tot(sub_num+tax_num, tip);
            tot_amt_no_tip = sub_num+tax_num;
            gknots_split = 0;
        }
    });

    /*
    Listens for the first Alfredo Williams split button to be clicked
    Grab all needed elements on the page
    Makes sure the user has slected the dish
    Change HTML Style of tip buttons accordingly
    Change HTML Style of price accordingly
    Change the price accordingly
    Adds a split to the dish
    Returns nothing
    */
    $('#afw1-split').click(function(e){
        var afw1 = document.getElementById("AFW1");
        var menu = document.getElementById("split-menu1");

        if (!afw1.checked){
            alert('Please select menu item before splitting')
        }
        else{
            if(menu.hidden){
                menu.hidden = false;
            }
            else{
                menu.hidden = true;
            }
        }
    });

    /*
    Listens for the second Alfredo Williams split button to be clicked
    Grab all needed elements on the page
    Makes sure the user has slected the dish
    Change HTML Style of tip buttons accordingly
    Change HTML Style of price accordingly
    Change the price accordingly
    Adds a split to the dish
    Returns nothing
    */
    $('#afw2-split').click(function(e){
        var afw2 = document.getElementById("AFW2");
        var menu = document.getElementById("split-menu2");

        if (!afw2.checked){
            alert('Please select menu item before splitting')
        }
        else{
            if(menu.hidden){
                menu.hidden = false;
            }
            else{
                menu.hidden = true;
            }
        }
    });

    /*
    Listens for the Garlic Knots split button to be clicked
    Grab all needed elements on the page
    Makes sure the user has selected the dish
    Change HTML Style of tip buttons accordingly
    Change HTML Style of price accordingly
    Change the price accordingly
    Adds a split to the dish
    Returns nothing
    */
    $('#gknots-split').click(function(e){
        var gknots = document.getElementById("GK");
        var menu = document.getElementById("split-menu3");

        if (!gknots.checked){
            alert('Please select menu item before splitting')
        }
        else{
            if(menu.hidden){
                menu.hidden = false;
            }
            else{
                menu.hidden = true;
            }
        }
    });

    /*
    Listens for the Josef May split button to be clicked
    Grab all needed elements on the page
    Subtracts old splits
    Adds New split
    Changes subtotal
    Change HTML Style of price accordingly
    Change the price accordingly
    Adds a split to the dish
    Returns nothing
    */
    $('#afw1-JM').click(function(e){
        var afw1_JM = document.getElementById("afw1-JM");
        var afw1_price = document.getElementById("AFW_price_1");

        if (afw1_JM.checked){
            var old_split = -21/afw1_split;
            chge_subtot(old_split, tip);

            afw1_split=afw1_split+1;
            var new_split = 21/afw1_split;
            afw1_price_split(new_split)
            tot_amt_no_tip = chge_subtot(new_split, tip);


        }
        else{
            var old_split = -21/afw1_split;
            chge_subtot(old_split, tip);

            afw1_split=afw1_split-1;
            var new_split = 21/afw1_split;
            afw1_price_split(new_split)
            tot_amt_no_tip = chge_subtot(new_split, tip);
        }

    });

    /*
    Listens for the Josef May split button to be clicked
    Grab all needed elements on the page
    Subtracts old splits
    Adds New split
    Changes subtotal
    Change HTML Style of price accordingly
    Change the price accordingly
    Adds a split to the dish
    Returns nothing
    */
    $('#afw2-JM').click(function(e){
        var afw2_JM = document.getElementById("afw2-JM");

        if (afw2_JM.checked){
            var old_split = -21/afw2_split;
            chge_subtot(old_split, tip);

            afw2_split=afw2_split+1;
            var new_split = 21/afw2_split;
            afw2_price_split(new_split)
            tot_amt_no_tip = chge_subtot(new_split, tip);
        }
        else{
            var old_split = -21/afw2_split;
            chge_subtot(old_split, tip);

            afw2_split=afw2_split-1;
            var new_split = 21/afw2_split;
            afw2_price_split(new_split)
            tot_amt_no_tip = chge_subtot(new_split, tip);
        }

    });

    /*
    Listens for the Josef May split button to be clicked
    Grab all needed elements on the page
    Subtracts old splits
    Adds New split
    Changes subtotal
    Change HTML Style of price accordingly
    Change the price accordingly
    Adds a split to the dish
    Returns nothing
    */
    $('#gknots-JM').click(function(e){
        var gknots_JM = document.getElementById("gknots-JM");

        if (gknots_JM.checked){
            var old_split = -5/gknots_split;
            chge_subtot(old_split, tip);

            gknots_split=gknots_split+1;
            var new_split = 5/gknots_split;
            gknots_price_split(new_split);
            tot_amt_no_tip = chge_subtot(new_split, tip);
        }
        else{
            var old_split = -5/gknots_split;
            chge_subtot(old_split, tip);

            gknots_split=gknots_split-1;
            var new_split = 5/gknots_split;
            gknots_price_split(new_split);
            tot_amt_no_tip = chge_subtot(new_split, tip);
        }

    });

    /*
    Listens for the Rocket Romero split button to be clicked
    Grab all needed elements on the page
    Subtracts old splits
    Adds New split
    Changes subtotal
    Change HTML Style of price accordingly
    Change the price accordingly
    Adds a split to the dish
    Returns nothing
    */
    $('#afw1-RR').click(function(e){
        var afw1_RR = document.getElementById("afw1-RR");

        if (afw1_RR.checked){
            var old_split = -21/afw1_split;
            chge_subtot(old_split, tip);

            afw1_split=afw1_split+1;
            var new_split = 21/afw1_split;
            afw1_price_split(new_split)
            tot_amt_no_tip = chge_subtot(new_split, tip);
        }
        else{
            var old_split = -21/afw1_split;
            chge_subtot(old_split, tip);

            afw1_split=afw1_split-1;
            var new_split = 21/afw1_split;
            afw1_price_split(new_split)
            tot_amt_no_tip = chge_subtot(new_split, tip);
        }
    });

    /*
    Listens for the Rocket Romero split button to be clicked
    Grab all needed elements on the page
    Subtracts old splits
    Adds New split
    Changes subtotal
    Change HTML Style of price accordingly
    Change the price accordingly
    Adds a split to the dish
    Returns nothing
    */
    $('#afw2-RR').click(function(e){
        var afw2_RR = document.getElementById("afw2-RR");

        if (afw2_RR.checked){
            var old_split = -21/afw2_split;
            chge_subtot(old_split, tip);

            afw2_split=afw2_split+1;
            var new_split = 21/afw2_split;
            afw2_price_split(new_split)
            tot_amt_no_tip = chge_subtot(new_split, tip);

        }
        else{
            var old_split = -21/afw2_split;
            chge_subtot(old_split, tip);

            afw2_split=afw2_split-1;
            var new_split = 21/afw2_split;
            afw2_price_split(new_split)
            tot_amt_no_tip = chge_subtot(new_split, tip);
        }
    });

    /*
    Listens for the Rocket Romero split button to be clicked
    Grab all needed elements on the page
    Subtracts old splits
    Adds New split
    Changes subtotal
    Change HTML Style of price accordingly
    Change the price accordingly
    Adds a split to the dish
    Returns nothing
    */
    $('#gknots-RR').click(function(e){
        var gknots_RR = document.getElementById("gknots-RR");

        if (gknots_RR.checked){
            var old_split = -5/gknots_split;
            chge_subtot(old_split, tip);

            gknots_split=gknots_split+1;
            var new_split = 5/gknots_split;
            gknots_price_split(new_split);
            tot_amt_no_tip = chge_subtot(new_split, tip);
        }
        else{
            var old_split = -5/gknots_split;
            chge_subtot(old_split, tip);

            gknots_split=gknots_split-1;
            var new_split = 5/gknots_split;
            gknots_price_split(new_split);
            tot_amt_no_tip = chge_subtot(new_split, tip);
        }

    });

    /*
    Listens for the confirm payment button to be clicked
    Grab all needed elements on the page
    Checks to see if the user has selected any dish to be paid for
    Returns nothing
    */
    $('#cfrm-btn').click(function(e){
        var gknots = document.getElementById("GK");
        var afw1 = document.getElementById("AFW1");
        var afw2 = document.getElementById("AFW2");

        if (!gknots.checked && !afw1.checked && !afw2.checked){
            alert('Please select a dish you wish to pay for');
            e.preventDefault();
        }
    });

    /*
    Listens for the back button to be clicked
    Grab all needed elements on the page
    Checks to see if the user has selected any dish to be paid for
    Returns nothing
    */
    $('#back-btn').click(function(e){
        alert('Please finish paying for your dishes before returning to the menu.')
    });

});

/*
Changes the Total price on the html page
Grab all needed elements on the page
Returns nothing
*/
function chge_tot(sub_tax, tip){
    var tot_amt = document.getElementById("total-amt");
    var new_tot = (sub_tax+(sub_tax*tip)).toFixed(2);
    tot_amt.innerHTML = new_tot;
}

/*
Changes the subtotal price on the html page
Grab all needed elements on the page
Returns nothing
*/
function chge_subtot(del_sub, tip){
    var sub_amt = document.getElementById('subtotal-amt');
    var tax_amt = document.getElementById('tax-amt');

    var sub_num = parseFloat(sub_amt.innerHTML);
    var tax_num = parseFloat(tax_amt.innerHTML);

    const tax_mult = 0.04;

    var del_tax = del_sub*tax_mult

    sub_num=sub_num+del_sub
    tax_num=tax_num+del_tax

    sub_amt.innerHTML = sub_num.toFixed(2);
    tax_amt.innerHTML = tax_num.toFixed(2);
    chge_tot(sub_num+tax_num, tip);
    return (sub_num+tax_num);
}

/*
Changes the HTML style of Dish prices
Grab all needed elements on the page
Checks if splits are selected
Returns nothing
*/
function afw1_price_split(subdish){
    var afw1_JM = document.getElementById("afw1-JM");
    var afw1_RR = document.getElementById("afw1-RR");
    var afw1_price = document.getElementById("AFW_price_1");

    if(afw1_JM.checked || afw1_RR.checked){
        afw1_price.style = "color: green;"
        afw1_price.innerHTML = "$"+subdish.toFixed(2)
    }
    if(!afw1_JM.checked && !afw1_RR.checked){
        afw1_price.style = "color: black;"
        afw1_price.innerHTML = "$"+subdish.toFixed(2)
    }

}

/*
Changes the HTML style of Dish prices
Grab all needed elements on the page
Checks if splits are selected
Returns nothing
*/
function afw2_price_split(subdish){
    var afw2_JM = document.getElementById("afw2-JM");
    var afw2_RR = document.getElementById("afw2-RR");
    var afw2_price = document.getElementById("AFW_price_2");

    if(afw2_JM.checked || afw2_RR.checked){
        afw2_price.style = "color: green;"
        afw2_price.innerHTML = "$"+subdish.toFixed(2)
    }
    if(!afw2_JM.checked && !afw2_RR.checked){
        afw2_price.style = "color: black;"
        afw2_price.innerHTML = "$"+subdish.toFixed(2)
    }

}

/*
Changes the HTML style of Dish prices
Grab all needed elements on the page
Checks if splits are selected
Returns nothing
*/
function gknots_price_split(subdish){
    var gknots_JM = document.getElementById("gknots-JM");
    var gknots_RR = document.getElementById("gknots-RR");
    var gknots_price = document.getElementById("GK_price");

    if(gknots_JM.checked || gknots_RR.checked){
        gknots_price.style = "color: green;"
        gknots_price.innerHTML = "$"+subdish.toFixed(2)
    }
    if(!gknots_JM.checked && !gknots_RR.checked){
        gknots_price.style = "color: black;"
        gknots_price.innerHTML = "$"+subdish.toFixed(2)
    }

}
