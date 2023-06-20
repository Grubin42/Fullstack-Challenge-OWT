module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Boat', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Ce champ ne peut pas être vide' },
                notNull: { msg: 'Champ obligatoire' },
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Ce champ ne peut pas être vide' },
                notNull: { msg: 'Champ obligatoire' },
            }
        },
        picture: {
            type: DataTypes.STRING,//a voir si on enregistre les binaire en bdd ou juste le path des imgs
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Ce champ ne peut pas être vide' },
                notNull: { msg: 'Champ obligatoire' }
            }
        },
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
}