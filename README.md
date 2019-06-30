## Generate Components 

#### Task 1: Generate a Component
```
ng generate component first-component
ng g c second-component
ng g c third-component --inline-style
ng g c fourth-component --inline-template
ng g c fifth-component --view-encapsulation=None
ng g c sixth-component --skipTests=true
ng g c seventh-component --flat=true
ng g c foldername/eighth-component
```
Output:
```

D:\angular-training\components-demo>ng generate component first-component
CREATE src/app/first-component/first-component.component.html (30 bytes)
CREATE src/app/first-component/first-component.component.spec.ts (685 bytes)
CREATE src/app/first-component/first-component.component.ts (304 bytes)
CREATE src/app/first-component/first-component.component.css (0 bytes)
UPDATE src/app/app.module.ts (430 bytes)

D:\angular-training\components-demo>ng g c second-component
CREATE src/app/second-component/second-component.component.html (31 bytes)
CREATE src/app/second-component/second-component.component.spec.ts (692 bytes)
CREATE src/app/second-component/second-component.component.ts (308 bytes)
CREATE src/app/second-component/second-component.component.css (0 bytes)
UPDATE src/app/app.module.ts (550 bytes)

D:\angular-training\components-demo>ng g c third-component --inline-style
CREATE src/app/third-component/third-component.component.html (30 bytes)
CREATE src/app/third-component/third-component.component.spec.ts (685 bytes)
CREATE src/app/third-component/third-component.component.ts (268 bytes)
UPDATE src/app/app.module.ts (666 bytes)

D:\angular-training\components-demo>ng g c fourth-component --inline-template
CREATE src/app/fourth-component/fourth-component.component.spec.ts (692 bytes)
CREATE src/app/fourth-component/fourth-component.component.ts (322 bytes)
CREATE src/app/fourth-component/fourth-component.component.css (0 bytes)
UPDATE src/app/app.module.ts (786 bytes)

D:\angular-training\components-demo>ng g c fifth-component --view-encapsulation=None
CREATE src/app/fifth-component/fifth-component.component.html (30 bytes)
CREATE src/app/fifth-component/fifth-component.component.spec.ts (685 bytes)
CREATE src/app/fifth-component/fifth-component.component.ts (364 bytes)
CREATE src/app/fifth-component/fifth-component.component.css (0 bytes)
UPDATE src/app/app.module.ts (902 bytes)

D:\angular-training\components-demo>ng g c sixth-component --skipTests=true
CREATE src/app/sixth-component/sixth-component.component.html (30 bytes)
CREATE src/app/sixth-component/sixth-component.component.ts (304 bytes)
CREATE src/app/sixth-component/sixth-component.component.css (0 bytes)
UPDATE src/app/app.module.ts (1018 bytes)

D:\angular-training\components-demo>ng g c seventh-component --flat=true
CREATE src/app/seventh-component.component.html (32 bytes)
CREATE src/app/seventh-component.component.spec.ts (699 bytes)
CREATE src/app/seventh-component.component.ts (312 bytes)
CREATE src/app/seventh-component.component.css (0 bytes)
UPDATE src/app/app.module.ts (1125 bytes)

D:\angular-training\components-demo>ng g c foldername/eighth-component
CREATE src/app/foldername/eighth-component/eighth-component.component.html (31 bytes)
CREATE src/app/foldername/eighth-component/eighth-component.component.spec.ts (692 bytes)
CREATE src/app/foldername/eighth-component/eighth-component.component.ts (308 bytes)
CREATE src/app/foldername/eighth-component/eighth-component.component.css (0 bytes)
UPDATE src/app/app.module.ts (1257 bytes)
```
