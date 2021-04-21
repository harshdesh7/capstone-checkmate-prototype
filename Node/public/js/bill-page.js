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

    // $.getJSON("api.js", function(res){
    //
    //     console.log(res);
    // });

    // $.get("apicall?action=finish&username=dummy&tablename=testaurant-tab1&amount=10.01", function(res){
    //     console.log(res)
    // });

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

    $('#afw1-JM').click(function(e){
        var afw1_JM = document.getElementById("afw1-JM");

        if (afw1_JM.checked){
            var old_split = -21/afw1_split;
            chge_subtot(old_split, tip);

            afw1_split=afw1_split+1;
            var new_split = 21/afw1_split;
            tot_amt_no_tip = chge_subtot(new_split, tip);
        }
        else{
            var old_split = -21/afw1_split;
            chge_subtot(old_split, tip);

            afw1_split=afw1_split-1;
            var new_split = 21/afw1_split;
            tot_amt_no_tip = chge_subtot(new_split, tip);
        }

    });

    $('#afw2-JM').click(function(e){
        var afw2_JM = document.getElementById("afw2-JM");

        if (afw2_JM.checked){
            var old_split = -21/afw2_split;
            chge_subtot(old_split, tip);

            afw2_split=afw2_split+1;
            var new_split = 21/afw2_split;
            tot_amt_no_tip = chge_subtot(new_split, tip);
        }
        else{
            var old_split = -21/afw2_split;
            chge_subtot(old_split, tip);

            afw2_split=afw2_split-1;
            var new_split = 21/afw2_split;
            tot_amt_no_tip = chge_subtot(new_split, tip);
        }

    });

    $('#gknots-JM').click(function(e){
        var gknots_JM = document.getElementById("gknots-JM");

        if (gknots_JM.checked){
            var old_split = -5/gknots_split;
            chge_subtot(old_split, tip);

            gknots_split=gknots_split+1;
            var new_split = 5/gknots_split;
            tot_amt_no_tip = chge_subtot(new_split, tip);
        }
        else{
            var old_split = -5/gknots_split;
            chge_subtot(old_split, tip);

            gknots_split=gknots_split-1;
            var new_split = 5/gknots_split;
            tot_amt_no_tip = chge_subtot(new_split, tip);
        }

    });

    $('#afw1-RR').click(function(e){
        var afw1_RR = document.getElementById("afw1-RR");

        if (afw1_RR.checked){
            var old_split = -21/afw1_split;
            chge_subtot(old_split, tip);

            afw1_split=afw1_split+1;
            var new_split = 21/afw1_split;
            tot_amt_no_tip = chge_subtot(new_split, tip);
        }
        else{
            var old_split = -21/afw1_split;
            chge_subtot(old_split, tip);

            afw1_split=afw1_split-1;
            var new_split = 21/afw1_split;
            tot_amt_no_tip = chge_subtot(new_split, tip);
        }
    });

    $('#afw2-RR').click(function(e){
        var afw2_RR = document.getElementById("afw2-RR");

        if (afw2_RR.checked){
            var old_split = -21/afw2_split;
            chge_subtot(old_split, tip);

            afw2_split=afw2_split+1;
            var new_split = 21/afw2_split;
            tot_amt_no_tip = chge_subtot(new_split, tip);

        }
        else{
            var old_split = -21/afw2_split;
            chge_subtot(old_split, tip);

            afw2_split=afw2_split-1;
            var new_split = 21/afw2_split;
            tot_amt_no_tip = chge_subtot(new_split, tip);
        }
    });

    $('#gknots-RR').click(function(e){
        var gknots_RR = document.getElementById("gknots-RR");

        if (gknots_RR.checked){
            var old_split = -5/gknots_split;
            chge_subtot(old_split, tip);

            gknots_split=gknots_split+1;
            var new_split = 5/gknots_split;
            tot_amt_no_tip = chge_subtot(new_split, tip);
        }
        else{
            var old_split = -5/gknots_split;
            chge_subtot(old_split, tip);

            gknots_split=gknots_split-1;
            var new_split = 5/gknots_split;
            tot_amt_no_tip = chge_subtot(new_split, tip);
        }

    });

    $('#cfrm-btn').click(function(e){
        var gknots = document.getElementById("GK");
        var afw1 = document.getElementById("AFW1");
        var afw2 = document.getElementById("AFW2");

        if (!gknots.checked && !afw1.checked && !afw2.checked){
            alert('Please select a dish you wish to pay for');
            e.preventDefault();
        }
    });

    $('#back-btn').click(function(e){
        alert('Please finish paying for your dishes before returning to the menu.')
    });

});

function chge_tot(sub_tax, tip){
    var tot_amt = document.getElementById("total-amt");
    var new_tot = (sub_tax+(sub_tax*tip)).toFixed(2);
    tot_amt.innerHTML = new_tot;
}

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
