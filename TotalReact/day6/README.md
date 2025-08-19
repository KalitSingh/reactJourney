### Learn Extra thing - How to create files in a multiple directory together !! 
**To do so we can use for-in-do loop in the terminal** 

```bash
for dir in dir1 dir2 dir3; do touch "$dir/file1.jsx" "$dir/file2.jsx" "$dir/file.css"; done
```
- this will create file1.jsx, file2.jsx file.css all together in each folder dir1, dir2, dir3.

**Here is the explanation of the above command**

* for dir - loop through each folder/directiory given as dir1, dir2 etc.
* do - execute the command inside the loop

--- 

