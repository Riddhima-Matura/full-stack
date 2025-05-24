import {Routes} from '@angular/router'

export const PublicTemplateLayoutRoutes : Routes =[

    {
        path:'auth',
        loadChildren: () => import ('../../auth/auth.module').then(m => m.AuthModule)
    },
   
]