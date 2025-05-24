import {Routes} from '@angular/router'

export const PrivateTemplateLayoutRoutes : Routes =[

    {
        path:'pages',
        loadChildren: () => import ('../../pages/pages.module').then(m => m.PagesModule)
    },
   
]