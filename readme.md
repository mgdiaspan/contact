# contact
Landing page to contact

#Run project

 - composer install

 - npm install  
 
 - create .env 
    * APP_NAME='Contact test'
      APP_ENV=local
      APP_KEY=base64:VElgxks9+jycF37LIifUnEw2sk8Orww0IdQYK245Mfo=
      APP_DEBUG=true
      APP_URL=http://localhost:8000
      
      DB_CONNECTION=mysql   
      DB_HOST=localhost   
      DB_PORT=3306   
      DB_DATABASE=contact   
      DB_USERNAME=root   
      DB_PASSWORD=root
      
      FILESYSTEM_DRIVER=public    
      CONTACT_PATH=contacts

      MAIL_DRIVER=smtp   
      MAIL_HOST=smtp.googlemail.com   
      MAIL_PORT=465   
      MAIL_USERNAME=contactnetshow@gmail.com
      MAIL_PASSWORD=1234@abcd
      MAIL_FROM_ADDRESS=contact@netshow.me
      MAIL_FROM_NAME=contact
      MAIL_ENCRYPTION=ssl
      
 - php artisan migrate
       
 - Run php artisan serve
 
 - Access http://localhost:8000
