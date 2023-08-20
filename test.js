let pattern_test = 
{
    onlyNumPatten : /[^0-9]/g,
    decimalPatten : /[^0-9.,]/g,
    numberPatten : /[^0-9,]/g,
    specialCharPatten : /[^\`\~\!\@\#\$\^\*\(\)\_\+\-\:\[\]\{\}\\\|\'\"\,\:\/\?\<\>\.\,]/g,
    datePatten : /([0-2][0-9]{3})-([0-1][0-9])-([0-3][0-9])/,
    dateTimePatten : /([0-2][0-9]{3})-([0-1][0-9])-([0-3][0-9]) ([0-5][0-9]):([0-5][0-9]):([0-5][0-9])(([\-\+]([0-1][0-9])\:00))?/,
    phonePatten : /(01[0|1|2|6|7|8|9]|0(2|31|32|33|41|42|43|44|51|52|53|54|55|61|62|63|64))(\-|\s)?([0-9]{3,4})(\-|\s)?([0-9]{4})/,
    ipPatten : /((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\:([0-9]{1,5}))?)/,
    numTest : (str) => 
    {
        return this.onlyNumPatten.test(str);
    },
    decimalTest : (str) =>
    {
        return this.decimalPatten.test(str);
    },
    numberTest : (str) =>
    {
        return this.numberPatten.test(str);
    },
    specialCharTest : (str) =>
    {
        return this.specialCharPatten.test(str);
    },
    dateTest : (str) =>
    {
        let rtv = false;
        if (!this.datePatten.test(str)) rtv = true;
        return rtv;
    },
    dateTimeTest : (str) =>
    {
        let rtv = false;
        if (!this.dateTimePatten.test(str)) rtv = true;
        return rtv;
    },
    phoneTest : (str) =>
    {
        let rtv = false;
        let sT = str.replaceAll("-", "");
        sT = sT.replaceAll(" ", "");
        if (sT.substr(0,2) == "02")
        {
            if (sT.length <= 8 || sT.length >= 11) rtv = true;
        }
        else if (sT.length <= 9 || sT.length >= 12) rtv = true;
        if (!this.phonePatten.test(str)) rtv = true;
        return rtv;
    },
    ipTest : (str) =>
    {
        let rtv = false;
        let strArr = str.split('.');
        strArr.forEach((e) => 
        {
            if (e.indexOf(':') > 0)
            {
                let portArr = e.split(':');
    
                if (portArr[0].length > 3 || parseInt(portArr[0]) >= 256) rtv = true;
                if (portArr[1].length == 0) rtv = true;
            }
            else
            {
                if (e.length > 3 || parseInt(e) >= 256)
                {
                    rtv = true;
                }
            }
            if (e == "" || e == null || e == undefined) rtv = true;
        })

        if (!this.ipPatten.test(str)) rtv = true;

        return rtv;
    }
}