module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                msg: 'Ce nom est déjà pris.'
            },
            validate: {
                notEmpty: { msg: 'Ce champ ne peut pas être vide' },
                notNull: { msg: 'Champ obligatoire' },
                len: {
                    args: [2, 25],
                    msg: 'Le champ doit contenir entre 2 et 20 caractères',
                },
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Ce champ ne peut pas être vide' },
                notNull: { msg: 'Champ obligatoire' },
                len: {
                    args: [2, 25],
                    msg: 'Le champ doit contenir entre 2 et 20 caractères',
                },
            }
        },
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
}