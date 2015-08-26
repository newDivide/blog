module.exports = function(grunt) {

    // 1. 所有的配置将在这里进行
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            // 2. 拼接文件的配置将在此进行  
            dist: {
                src: [
                    'js/lib/*.js', // All JS in the libs folder
 
                ],
                dest: 'js/main.js',
            },
        },
        less:{
            main:{   
              files: [{
                    expand: true,   // 这个expand是个很神奇的东西，可以不用指定新产生的文件名，
                                    // 使其使用源文件的文件名，只修改后缀
                    cwd: 'less/',    // 指定less文件所在文件夹
                    src: ['*.less'],    // less文件
                    dest: 'css/', // 产生的css文件存放目录
                    ext: '.css'       // css后缀
                }] 
            }
        },
        watch : {  
            less :{  
                files:['less/*.less'],  
                tasks:['less']  
            },  
            livereload:{  
                options:{  
                    livereload:true  
                },  
               files:['css/*.css','less/*.less','js/*.js','*.html'],  
            }  
        }  

    });

    // 3. 我们在这里告诉grunt我们将使用插件
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-contrib-less');
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. 我们在这里告诉grunt当我们在终端中输入grunt时需要做些什么
    grunt.registerTask('default', ['concat','watch','less']);

};   