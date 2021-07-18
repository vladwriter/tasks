Installation
For instalation you need a local server. You may to install WAMP, MAMP (only x64) or OpenServer.
WAMP/MAMP
If you use a WAMP or MAMP clone this app in dir 'www' (for example, wamp/www). This application must be located at www/php.
Then start your localserver and type in browser 'localhost/php/index.php'. During first start app will automatically create the database with table where will be save all info.

OpenServer
Clone app in dir 'openserver/domains/localhost'.


Warning! Before start open file connect.php in dir 'php' and change '$username = "root";' to '$username = "mysql";' and '$password = "";' to '$password = "mysql";'.
In this app used default username and password to mysql ($username = "root" and $password = ""). If you have another 'Username' and 'Password', please change $username and $password in connect.php. If you want to use your database, you may to change databasename in $dbname of connect.php.