#include <stdio.h>
int main(){
    int n;
    printf("Enter a no to make table of\n");
    scanf("%d",&n);
    printf("You entered %d as your no.\n");
    for(int i=1;i<=10;i++){
        printf("%d x %d = %d \n",n,i,n*i);
    }
    return 0;
}
