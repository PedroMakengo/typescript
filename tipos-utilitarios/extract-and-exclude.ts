// geralmente usamos o Extract e Exclude em tipos literais

// Extract <Type, Union> Extrair tipos de uma união de tipos
type AppEvents = 'click' | 'hover' | 'scroll' | 'resize'

// Exclude<UnionType, ExcludedMembers>
type UserRoles = 'admin' | 'editor' | 'viewer' | 'guest'
