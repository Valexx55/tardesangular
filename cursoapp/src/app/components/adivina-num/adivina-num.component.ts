import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-adivina-num',
  templateUrl: './adivina-num.component.html',
  styleUrls: ['./adivina-num.component.css']
})
export class AdivinaNumComponent implements OnInit, AfterViewInit {
/*
  //1 CALCULAR NUMERO ALEATORIO
  //2 RECIBIR EL NÚMERO DEL USUARIO
  //3 SI MAYOR --> INFORMO MAYOR
      SI MENOR --> INFORMO MENOR
      SI IGUAL --> INFORMO has acertado!!!!
  //4 INCREMENTO NUM INTENTOS
  //5 ¿QUEDAN INTENTOS?
    SI --> VUELVO A 3
    NO --> INFORMAR FIN 

  -----

  IMPORTANTÍSIMO::
  PENSAR/DISEÑAR LA APARIENCIA
  DEL HTML
    
      */

  //esta propiedad, representa una eitqueta hija
  //la he ligado, con viewchild ('#alias')
  @ViewChild('cajanum') inputnumero!:ElementRef; //es una clase de Angular que en su interio, alberga una etiqueta HTML (nativeElement)
  static readonly MAX_INTETOS:number=5;
  numero_aleatorio:number;
  vidas_disponibles:number;
  rutaimagen?:string;
  mensaje?:string;
  instrucciones:string;
  numero_usuario:number;

  calcularNumAleatorio ():number
  {
    let numero_aleatorio:number=0;

      numero_aleatorio = Math.round(Math.random() * 100); //[0,1)

    return numero_aleatorio;
  }

  constructor() {
    //1 CALCULAR NUMERO ALEATORIO
    this.numero_aleatorio=this.calcularNumAleatorio();
    this.vidas_disponibles=AdivinaNumComponent.MAX_INTETOS;
    this.rutaimagen='';
    this.mensaje='';
    this.instrucciones="ADIVINE UN NÚMERO ENTRE 1 Y 100";
    this.numero_usuario=0;
   }
//TODO: HACER UN MÉTODO PARA VER SI INPUTNUMERO ESTÁ INICIALIZADO O NO

  ngAfterViewInit(): void {
    console.log('aquí this.inputnumero es != null');
  }

  ngOnInit(): void {
  }

  comprobarNumero()
  {
    console.log('comprobarNumero()');
    //2 RECIBIR EL NÚMERO DEL USUARIO
    let etiqueta_input:HTMLInputElement =<HTMLInputElement>this.inputnumero.nativeElement;
    console.log('Valor intro = '+etiqueta_input.value);
    this.numero_usuario =+ etiqueta_input.value;//casting

    //3 SI MAYOR --> INFORMO MAYOR
     // SI MENOR --> INFORMO MENOR
    // SI IGUAL --> INFORMO has acertado!!!!
    if (this.numero_usuario>this.numero_aleatorio)
    {
      this.mensaje='El número buscado es menor';
    }else if (this.numero_usuario<this.numero_aleatorio)
    {
      this.mensaje='El número buscado es mayor';
    }else {
      //son iguales acierto
      this.mensaje='ACERTASTE!!!';
      this.rutaimagen='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQERUOEBAVFRUVEBASEhUQDw8PEBoSFRIWFhUVFxUYHikhGBsmHhUXIjIiJiosLy8wFyA0OTQvOCkuLywBCgoKDg0OHBAQGy4mICYuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLv/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQUDBAYCB//EAEAQAAIBAgIFCAgEBQMFAAAAAAABAgMRBCEFEjFBUQYTImFxgZGhMjNCUnKxwdEUI2KCkqLh8PFTY8IHFjRDg//EABsBAQADAQEBAQAAAAAAAAAAAAADBAUCBgEH/8QAMxEAAgEDAQYEBgEDBQAAAAAAAAECAwQRIQUSMUFRYRMigZEycbHB0fChI0LhFBVSovH/2gAMAwEAAhEDEQA/APuIAAAAAAAAAAAAAAAAAAAAAAAABABIAAAAAABABIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBIAIBIAIBIAIBixFeNOOvOSiltcmorxZQ1+U6k3HC0ZVX77/Lo/wATzZBWuaVFZqSSO405S4I6Qw18RCmrznGK4ykorzOYnDGVvW4hU0/ZoRt/O8zzS5PUE9acXOW+VSTm/MyK23aa0pxb+ehMrb/k/Y6bD4ynUzp1Iy+GSl8jZORrcn6Es1TUXucG4NeAhhsVR9TiXJe5XXOR/i2o+UtvQelSLXy1Prt1/a/c60HNUuUsqeWLoSh/uUvzKXa968y9wmMp1o69KcZrjFp+PA16F1RrrNOWfr7EE6cocUbAJBYOCASACASACASACASACASAACAASAAACCQAAQwDzKSSu2c/i+ULm3TwcOcaydSWVFdj9p9hh0pUeIxM8M5PmqcIOUYu2tOV3aTW1JLYblGjGCUYpJLYkrI89tDa0oTdKjpji/x+S1TopJSlr2K2GiHUlzmJqOtLdrZU12QWSLSFNLJIxYrGQpLWnJJdb/u5UVtLVKmVGOrH36n0h9zzs5OT3pPPdlmMZT4F5Kolm2V9bTlCOSnrPhC9R/y3Kv8ABOo71JSqP9Ter/CsjcoYB7ElFdSS+RF4ufhTf8Evgxj8TM1LT1F5SlqP/cTp/PIsadaMleLTXU00VdXR0uqXb/Ur54DUd461N8YNxXhsYc8fEmv5Hgwl8LOmcU9pWV9DR1udoydKp71N2v2x2M06Oka1L01zkfegtWa/bsfcW2D0hTqq8JLrWxrtTzRJCWPNF+qI5QnAx4fT1Si1DGQ6OxVqa6P74+ydFRqxnFTjJSTV04tNNdTKmcFJWauVlN/g61JU3alVq6lSDzgnJPVlFey7rsN+w2vPeVOtrnTP5K06UZax0Z1wIB6UqEgAAAAAAAAAAAAAAAAAAEAEmrj8XGjTlVm7KKv9kutmppDTuHoZSqJy3Qh05t8LL6lLKNXGTVSvHUpRd6dK923ulU4vqM+92jSt48cy5Imp0XLV6I9aDoy1ZV6i6dWbqSXC/ox7ke9L490tWMVeUrqN3ZKyu2yw2I5nFV+drOovRgnCPBu95NeS7jxc5t5k+P3L9OO/IihhZVJ60m5z4vYvhWyJcUMAl6WfUth7wFHViuO/tNsU6W95p6nc6r4R4GJpJWSt2BNRV27dprYitJz1FZde0zQwkdsryfXs8D7F783u8tCNrC1PSx1Pj/LL7Ht2kr7U+o84j1clZbHuROH9GPwoneW0nhr5YPmFjKNatgU845fIq8VgrPWzjLdOGT8d66mdFE8YqneLXURStdHOGhJGs1o+BXaLx8nLmaltZR1lJZJxvbZuZm01g3VpOMcpK0oPhKLvF+JUVZ81OFbdFuM/glk/B2Z0lOakrrNNdxFCWYp/uT5VjuSyja0HpFYmjGpsl6M47HGa2qxYHJV8PVw9R4nDWbfrabdozXFcJ9ZaYDlFQq9Fy5ue+FXoST78mezsNo068UpPEuefsUKlFrWPAugQmSaZAAAAAAAAAAAAAAAACCSAgcpojDQWvLVSlztdN2V3arK132WNvG4pUYa7TaW6Ku82krLvMGC6NfEU+Fdy7pwjNfMjTq/Im+Cv4NP6HgK8d2rJd39TSXmaz2KnF4+rW6NnTg9t3+Y1wyyiZ9HYXNZWiti7DxhIpvNbrotcLHO/UVoJ1HqWJyUFuo2VkJMiOYe0tctCuaeKhJSjKKu891/73mNzmqkdd7b5LZ6L3Fgnc1a/rof37MiGUOcXxaJU88VyZnxDtBr9DuesMujHsR4xEujJb3DyMuFXQXwosU1vT9/qRvSPr9jYgsjxVRlSPO00ZwzHdIc6lTpDCe0l2r6lZhqtShlTWvD3G7Sj8L4dTOkmis0jBJqyzd7mPcU/DblH2LlOe8tyRs6PxqrJtRlGzs1NWd8n9TW09h4OhUlKCbVOerdJ2eq7W7xoHOMpcas/K0foetOu8I0986lKmv3VIoQW80urRE/LPQ6bDxtGK4RS8jIED9CSMsAkH0EAEgEAkAAAAAAAAgAA5nGLm8c+FWjCX7qb1X32aM+Opa9OUeMZLxViOVkNXmcT/p1VGXwVOi/OxmWaPGbVpOndS76/vqXqcswi/T2OZ0ZUvqPikn22s/MvKbtl1FFq83UqU+FRzj8M+kvO6LjCyu0+KMuOjcV+ot1dcSN2KseZvcepOxjjmyabxiKIV1MkckaVaX50G/7ykbrRXY31ke37nFd7qTXI6prV/IzSd1N/oN7D+hH4Ua8oWpyX6XczYf0I/Ciezg44zxayczeV6/Y2W8iFkiWeJs1JSxqQJHiZT6Tq9K+6Mc/mW0nl5nN6Sk59Fbak1BdjeflcyLt5xHqW7dat9C20FTcaEL7XHWfbJuT+ZFdc5isPS4TlVfZCOXnJG9TioxtwRraAjzmKrV90IxoRfX6U/OxZ2dS8W5gu+fYgnLSUjpCQD25ngAAAAAEAkAAAAAAAAAAGnpXCKvRnRftwkl1O2T7nYodBYlzpJS9KN4TW/Xi7P5eZ1LOUxtP8NjL+xiM1wVaO1d6dzC23b71NVVy4/Is274wNPT9LUqQrLY/y59jzi/HLvM2jKm7hn3byxx+GVWnKD2Nf4fdtOdwdWUXaXpwerJfXsazPLN7rU+hoU/PDdOilK56powUZ6yTRsPJHVPWTkyJnsrq7/Ng3x+jMuMxDg0kr38dppvXnKLcdj6uvrOa9RZSXFHcIvj2N2pU1lL4HY2sN6EfhRrQotxlbemluuxzlSmoppWulk7smtpSjHfnnXP1OJJPyr90N1Mib3HpIxSlvLk5YWGRJGvpGraNuOX3KnR1PnK9/ZpRt++X2j8z1pLF7Z7d0Vvbbsl3ssdD4PmqaT9J3lN8ZPb9u4zHLfm5+iLT/AKdPHNmTSeKVKlKo90W/sjd5N4N0cPBS9OV6k/im7vwul3FNiIficTTwyzjC1arw1Yvox72dcj02w7fClWfPRfcoV5YSj6kgA9CVQAAAAAAAAAAAAAAAAQASVmntH/iKLprKStOnLhOOaf07yxbtmzmdM8tsLh7xi+dmvZpvo34Oexd1yKu6ag1U4PQlo06k54prL7DQ+N52HSVpxbhUi9qnHKSsaOncI4v8RBbFaolvhx7V8jwsWpwhpWlG0KiUcVTT1tWSy1+uz25bC5lioamvKcVFq93JJW7WeIubZ0am7xT4d0XlJxefddyp0Zikmk30Xse7/BbXuzjcXpKhRqONKevB3aUFfVe9J7Gu/I9x5YOKsqOt1zqKPkkyCFKp8ONC9/pKtTzQi/35nR6SdpRff5nqliIb325PwOTrcrq0tlKku1Sn9TBLlNiHupLsof1OpWsnPfyiaOzbhxSax6o7tY2n73kzFiMRGWqk79OL+ZxS5UYhbqXfQ/qZqfK2sttKi/8A5uP1JnTm1htezOf9rrxeVH/sjvKkrFZjcR7K7/sc/wD95yllKhbrhU+jS+ZiWmqVWSpym6cX6cpLO3upq9r8SK5jUnLCWhFGyq09ZxenqXOi6HPVOefoQbVPg5bHPs3IttI4uNGm5y2Jd/UkMFXpOC5qcZRSSWpKLVl2Faqka0pYur/42G1pLhUqxW7il8zq3tpVaipx/wDFzKc57z3pfvYuuTOAlSpupVX5tV69Tq92Hci7OP0Ny9w9a0aydCT9569O/wAdsu9I6ynUUkpRaaexpprxPbW3hKmo0noijXp1YTfiLDMgALBCAAAAAAAAACCQAADxUmkm27JK7byVgD0UWnOUtHC9FvXqWypw29snsiu3M57lFyxlO9LCOy2SrWzfVT+/+TkEt+9u7bd23xb3mVc7RUXu0tX15G5Y7HlUSnW0XTm/x9TZ5Qco8Tirqc9Wn/p024x/dvl3+Bz0rvJFpXhdXK+GTsY8qspvek8s9JChTpxUaawi20RprEYejPD05JRnK7vFTaurNK+Sv2GuoSla7bts1m3bsT2GOLNw4dSU1hvgdqhTpScoxWXq2YVSW89qmuB6B8wjttsJEkEn0ECwAB5dNcDw6HBmUHzCPuWYNSUc4tp8YtxfkbWI0ziJYb8G5rm+j7KjKyd7XW1dp4MFd5nSnKGd1kc6NOq1vxTa1T7lcrrJl1oPTGIwjTpVHbfTledN/t3dqsVbzaXebtCG8KcotOLwz5KjCcXGayu59M0DyupYhqnU/KqvZGT6En+mWzueZ0p8Tkk8mdJyd5XVKFqWIbqUskp5upDt96Pn2mxbbSz5avv+Tzl7sZx89DVdOfp1+R9JBhw2IjUiqkJKUZK8XF3TRmNcwACCQCASAACAAeKs1FOUnZJNt9SOF07LG4981QozhQvtqflOdnlKV89XgvE70khrUfFjuttLnjmT29fwZb6im+WeXofOKHITENdOrSh1R16j+SI0vyQ/DUJ15Yi+qsoqkleTdoq+txZ9HOH/AOo2N9Vh09rdWfYrxjfvb8CjcWlvRpOW7/LNS22hd3NeMN7Cb1wlwXE4prK3UVtZZlvRpTqSVOnBznLZGKu+3qXWzsdBchIRtVxVpyyapp/lrtftPyMqha1Kz8vDqb93f0bePn49Fx/wfO6Mro3KU7o7HlxyanKpTr4Wk22lTnCmkkrLoy4JWy8DHonkFN2liamr+il0pd8nl4IkdhWVRxis9+RDHa9s6CnN4fTizk5VYrabOHwNeor06FSSte6pTt4n0/R3J7C4f1dGN/elepP+KV2WyLkNlP8Avl7f5M2rt7X+nD3f2R8e0foqtXvqKCs7NTnqST61m0WUeSGI3zorsnN/8TuNK6BpV3zivTqrZUpu0u9bJLtKmq8VhfW0+egv/ZRV5W/VT+xm3dlc0dY6x6rj6nC2xVn8LSfTH3OclyQxG6pS751V/wADS0hoWvQWtU5u36ankrpXZ18MXiMTlhqLjH/VrJwh+2O2RZ6O5Owpy56tJ1qvvT9FfDDYjm0s7mvq1hdX+5D2vWh8TT7YR80nga8YqcsPVUWrqXNzat9DWVWLPt9iu0hobD4j1tGMuu2rPukrM1Z7K08kvdfg6p7fef6kPZ/n8nyW5pV57Wd5pTkBtlhatv0Vc13TWfimanJLktUWK18TScY0s4p5xlN3Ss9jSzfgUnYVt9Ra48+KNRbXtvClUi9UuHBnEUM3fqLFLLuO/wBO8iaNa9TD2pVN6SfNSfXH2e1HD4zB1KE+arQcJLj6LXGMtkkcXFpUovMuHU7s9o0bmOI6S6P91Ljk9yY/F0ed59xkpyjKPN61mtmd96aNvEcg669GvTl1T14eaTPP/T3HaledBvKrDWXxwv8ANN+B9FNK1taFaipNa8HqzGvr67triUFLTispPR+h880Rhsfo+XqJVKTd5wpNVP3RW1S7szvMLiI1YKpC9msrpxfY080zYIsX6NDwlupvHfkZNzcu4lvyST5taZ9CQATlYAAAAAAAAAHzXSmDq47H1Y0l0YNU3N31IqKz7XdvLefSjWwmEhSTjTiopylJ22uUndtveyvcUFWSi3pnL7lq1unbtzivNjC7dzT0JoSlhIatNXk/TnJXnJ9b3LqLUgE0YqKwloV5SlOTlJ5bJAB0ckAkAEAkAEWJAAIFiQAAAADR0poyliYOnVjdbnslF8YvczeB8aTWGfU2nlHy/GaKq6PxVKs+lTVWNqiVui5WcZLc7N9T8j6fcw4rDwqwdOpFSjJNNNXTRkhGySW5JeBXoW6otqPB6/ItXV3K4UXP4ksZ6rl9z2ACyVAAAAAAAAAAAAAAAAQSACCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAASAAACCQAAAAAAAAAAAAAAAAAAACAASCAASCAASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/2Q==';
    }

   //4 INCREMENTO NUM INTENTOS
   this.vidas_disponibles=this.vidas_disponibles-1;

   //5 ¿QUEDAN INTENTOS?
   if (this.vidas_disponibles==0)
   {
    this.mensaje='PEDISTE NO TE QUEDAN INTETOS!!!';
    this.rutaimagen='https://us.123rf.com/450wm/meteoropata/meteoropata1608/meteoropata160801513/70087705-boxeo-knockout-boxeador-en-el-suelo-silueta-ilustraci%C3%B3n-vectorial-.jpg?ver=6';
   }
  }

  

}
