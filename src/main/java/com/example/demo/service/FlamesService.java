package com.example.demo.service;

import org.springframework.stereotype.Service;

@Service
public class FlamesService {

    public String calculateFlames(String bn, String gn) {

        // (Optional but recommended) Remove extra spaces
        bn = bn.toLowerCase().replaceAll("\\s+","");
        gn = gn.toLowerCase().replaceAll("\\s+","");

        // Convert girl name to char array (so we can mark matched letters)
        char[] girlArr = gn.toCharArray();

        int count = bn.length() + gn.length();

        for (int i = 0; i < bn.length(); i++) {
            char b = bn.charAt(i);

            for (int j = 0; j < girlArr.length; j++) {
                char g = girlArr[j];

                if (b == g) {
                    count = count - 2;

                    // Correct way to remove matched character
                    girlArr[j] = '0';

                    break;
                }
            }
        }

        // Return result instead of print
        if (count == 3 || count == 5 || count == 14)
            return bn + " & " + gn + " are Friends 🤝";

        else if (count == 10)
            return bn + " & " + gn + " are Lovers ❤️";

        else if (count == 8 || count == 12 || count == 13)
            return bn + " & " + gn + " have Affection 🥰";

        else if (count == 6 || count == 11 || count == 15)
            return bn + " & " + gn + " are going to get Marriage 💍";

        else if (count == 2 || count == 4 || count == 7 || count == 9)
            return bn + " & " + gn + " are Enemies 😡";

        else if (count == 1)
            return bn + " & " + gn + " are Sister 👧";

        else
            return "Pls give your name correctly ❌";
    }
}