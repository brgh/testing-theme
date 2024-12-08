---
layout: default
title:  "From checkbox to timestamp"
nav_order: 2
---
This is just a very simple table that contains checkboxes in the first column and timestamps in the second column. Selecting a checkbox will populate the cell to the right with the timestamp that the checkbox was selected. Unselecting it updates the timestamp. 

I included a reset button to clear the whole thing. Try it out! For sure want to add other cool stuff but this is a cool start. (This started off as a very simple HTML website also hosted on github pages where I have pretty much the same fucntionality. The styling is different since that page is not using Jekyll. This is definitely a big improvement!) 

| Checkbox | Timestamp (Last Modified) | 
| :---: | :---: |
| <input id="cb1" type="checkbox" /> | <span id="cb1-value" class="timestamp"></span> |
| <input id="cb2" type="checkbox" /> | <span id="cb2-value" class="timestamp"></span> |
| <input id="cb3" type="checkbox" /> | <span id="cb3-value" class="timestamp"></span> |
| <input id="cb4" type="checkbox" /> | <span id="cb4-value" class="timestamp"></span> |
| <input id="cb5" type="checkbox" /> | <span id="cb5-value" class="timestamp"></span> |
| <input id="cb6" type="checkbox" /> | <span id="cb6-value" class="timestamp"></span> |
| <input id="cb7" type="checkbox" /> | <span id="cb7-value" class="timestamp"></span> |



<div class="button-wrapper">
    <button id="reset" type="button" class="btn">Reset</button>
</div>
<!-- <button id="reset" type="button" class="btn" style="margin-left:100px;">Reset</button> -->

