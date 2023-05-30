#include<stdio.h>

struct stockdays{
    int days;
    int flag;
};
int main()
{
        int stockPrice[] = {1,5,3,7,8};
        int newarray[3];
        struct stockdays newer[3];
        for(int i=0;i<3;i++){
            scanf("%d",&newer[i].days);
            newer[i].flag = 0;
        }
        int n =3;
        int result =0;

        for(int i=0;i+1<3;i++)
        {
                if(stockPrice[newer[i+1].days]-stockPrice[newer[i].days] == newer[i+1].days-newer[i].days){
                        newer[i].flag=1;
                        newer[i+1].flag=1;
                }
        }

        for(int i=0;i<3;i++){
            printf("%d",newer[i].flag);
            if(newer[i].flag==1){
                result = result+ stockPrice[newer[i].days];
            }
        }
        printf("\n%d",result);

        return 0;
}
