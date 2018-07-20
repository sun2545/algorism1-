function Quicksort(vec, loBound, hiBound)
    {

        var pivot, loSwap, hiSwap, temp;

        
        if (hiBound - loBound == 1)
        {
            if (vec[loBound] > vec[hiBound])
            {
                temp = vec[loBound];
                vec[loBound] = vec[hiBound];
                vec[hiBound] = temp;
            }
            return;
        }

        
        pivot = vec[parseInt((loBound + hiBound) / 2)];
        vec[parseInt((loBound + hiBound) / 2)] = vec[loBound];
        vec[loBound] = pivot;
        loSwap = loBound + 1;
        hiSwap = hiBound;

        do {
            
            while (loSwap <= hiSwap && vec[loSwap] <= pivot)
                loSwap++;

           
            while (vec[hiSwap] > pivot)
                hiSwap--;

           
            if (loSwap < hiSwap)
            {
                temp = vec[loSwap];
                vec[loSwap] = vec[hiSwap];
                vec[hiSwap] = temp;
            }
        } while (loSwap < hiSwap);

        vec[loBound] = vec[hiSwap];
        vec[hiSwap] = pivot;

        
        if (loBound < hiSwap - 1)
            Quicksort(vec, loBound, hiSwap - 1);

        
        if (hiSwap + 1 < hiBound)
            Quicksort(vec, hiSwap + 1, hiBound);
    }

    function PrintArray(vec,lo,hi)
   
    {
        var i;
        for (i = lo; i <= hi; i++)
            document.write(vec[i] + "<BR>");
    }

    
    var x = new Array(10);
    x[0] = 10;
    x[1] = 1;
    x[2] = 3;
    x[3] = 8;
    x[4] = 2;
    x[5] = 11;
    x[6] = 4;
    x[7] = 22;
    x[8] = 12;
    x[9] = 6;

    window.alert("before sort:<BR>");
    PrintArray(x,0,9);

    Quicksort(x,0,9); // QuickSort 호출

    window.alert("after sort:<BR>");
    PrintArray(x,0,9);

