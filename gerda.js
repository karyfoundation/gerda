var Gerda;(function(Gerda){var Arendelle;(function(Arendelle){var File=function(){function File(name,path,content,space){this.Content=content;this.Name=name;this.Path=path;if(space)this.Type=FileType.Space;else this.Type=FileType.Arendelle}File.prototype.FullPath=function(){return this.Path+"/"+this.Name+this.GetFileTypeEnd()};File.prototype.GetFileTypeEnd=function(){if(this.Type==FileType.Space)return".space";else return".arendelle"};return File}();Arendelle.File=File;(function(FileType){FileType[FileType["Arendelle"]=0]="Arendelle";FileType[FileType["Space"]=1]="Space"})(Arendelle.FileType||(Arendelle.FileType={}));var FileType=Arendelle.FileType})(Arendelle=Gerda.Arendelle||(Gerda.Arendelle={}))})(Gerda||(Gerda={}));